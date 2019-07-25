import React, { Component } from "react";

//Components
import Store from "../../components/store/store";
import Filter from "../../components/filter/filter";
import BreadCrumb from "../../components/breadcrumb/breadcrumb";

//Redux
import { connect } from "react-redux";
import { getProductList, getProductListWithCategory, updateFilters } from "../../redux/product/actions";
import { isNullOrUndefined } from 'util';

/**
 * CategoryContainer is used when application is on one of these paths:
 * - /show/:mainCategory/:subheader/
 * - /show/:mainCategory/
 *
 * props: {
 *  match: {
 *      params: {
 *          mainCategory,
 *          subheader,
 *      },
 *      url,
 *  }
 * }
 * 
 * Example: "http://localhost:3000/show/erkek/giyim"
 * 
 * mainCategory: "erkek"
 * subheader: "giyim"
 * url: "/show/erkek/giyim"
 * 
 */
class CategoryContainer extends Component {
  constructor() {
    super();
    this.state = {
      brandList: []
    };
  }
  /**
   * Executed when component is mounted
   */
  componentDidMount() {
    this.initializeCategory();
  }

  /**
   * Executed when another category container is used insted of current one.
   * @param {*} prevProps is previous category container's props.
   */
  componentDidUpdate(prevProps) {
    if (this.props.match.url !== prevProps.match.url) {
      this.initializeCategory();
    }
  }
  
    /**
     * Executes load operation with category objects
     */
    initializeCategory = () => {
        // Category paths that are fetched from url
        const { mainCategory, subheader } = this.props.match.params;
        // Category objects created from paths
        const { _mainCategory, _subheader } = this.findCategoryWithPath(mainCategory, subheader);
        //Fetch api products according to categories
        this.loadProducts(_mainCategory, _subheader);
        //Update subcategory filter
        if(!isNullOrUndefined(this.props.location.state) && !isNullOrUndefined(this.props.location.state.selectedSubCategory)) {
            const selectedSubCategory = this.props.location.state.selectedSubCategory;
            this.props.updateFilters({
                type:"subcategories",
                subcategories:[selectedSubCategory]
            })
        } else {
            this.props.updateFilters({
                type:"subcategories",
                subcategories:[]
            })
        }
    }

    findIdWithPath = (path) => {
        return this.props.apiCategories.filter(x => x.path === path)[0];
    }

    findIdWithPathAndParent = (path, parentId) => {
        return this.props.apiCategories.filter(x => x.path === path && x.parentId === parentId)[0];
    }

    /**
     * Creates category objects according to the path given.
     */
    findCategoryWithPath = (mainCategory=null, subheader=null) => {
        const _mainCategory = (mainCategory !== null) ? this.findIdWithPath(mainCategory) : null;
        const _subheader = (_mainCategory !== null && subheader !== null) ? 
            this.findIdWithPathAndParent(subheader, _mainCategory.id) : null;
        return {
          _mainCategory,
          _subheader
        }
    };

    /**
     * Determines the category hierarchy and creates an array of category ids.
     * Fetches the product list according to category ids.
     */
    loadProducts = (_mainCategory, _subheader) => {
        let categoryIds = [];
        if(!isNullOrUndefined(_subheader)) {
            categoryIds = this.findChildrenCategoryIds(_subheader.id);
        } else if(!isNullOrUndefined(_mainCategory)){
            const subheaderIds = this.findChildrenCategoryIds(_mainCategory.id);
            categoryIds = subheaderIds.map(x => this.findChildrenCategoryIds(x)).flat(1);
        }
        // Dispatch to get product list
        this.props.getProductListWithCategory(categoryIds);
    }
    
    /**
     * Finds children category ids of given category id.
     */
    findChildrenCategoryIds = id => {
      const allCategories = this.props.apiCategories;
      return allCategories.filter(x => x.parentId === id).map(x => x.id);
    };

    findBrandList = (products) => {
      let _brandList = [];
      products.forEach(p => {
        if (!_brandList.includes(p.brand)) {
          _brandList.push(p.brand);
        }
      });
      return _brandList;
    };

    findCityList = (products) => {
      let _cityList = [];
      this.props.apiProducts.forEach(p => {
        _cityList = [...new Set([..._cityList, ...p.cityOptions])];
      });
      return _cityList;
    };

  render() {
     console.log("category container", this.props);

    // Category paths that are fetched from url
    const { mainCategory, subheader } = this.props.match.params;
    // Category objects created from paths
    const categories = this.findCategoryWithPath(mainCategory, subheader);

    //City list to show in CitySelectBox
    const cityList = this.findCityList(this.props.apiProducts);
    //Brand list to show in BrandSelectBox
    const brandList = this.findBrandList(this.props.apiProducts);
    return (
      <div className="category-container">
        {/* Create Breadcrumb with category objects */}
        <BreadCrumb categories={categories} />
        <div className="container">
          <div className="row">
            <div id="aside" className="col-sm-6 col-md-3">
              {/* Filter Component */}
              <Filter
                cityList={cityList}
                brandList={brandList}
                currentCategories={categories}
              />
            </div>
            <div id="store" className="col-sm-6 col-md-9">
              {/* Store Component */}
              <Store
                apiProducts={this.props.apiProducts}
                fetchInProgress={this.props.fetchInProgress}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
    return {
      apiCategories: state.category.categories,
      apiProducts: state.product.productList,
      filters: state.product.filters,
      fetchInProgress: state.product.fetchInProgress
    };
};

const mapDispatchToProps = {
    getProductList,
    getProductListWithCategory,
    updateFilters
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryContainer);
