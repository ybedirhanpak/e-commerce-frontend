import React, { Component } from 'react'

//Components
import Store from '../../components/store/store';
import Filter from '../../components/filter/index';
import BreadCrumb from '../../components/breadcrumb/breadcrumb'

//Redux
import { connect } from "react-redux";
import { getProductList, getProductListWithCategory } from "../../redux/product/actions";
import { isNullOrUndefined } from 'util';

/**
 * CategoryContainer is used when application is on one of these paths:
 * - /show/:mainCategory/:subheader/:subcategory
 * - /show/:mainCategory/:subheader/
 * - /show/:mainCategory/
 * 
 * props: {
 *  match: {
 *      params: {
 *          mainCategory,
 *          subheader,
 *          subcategory,
 *      },
 *      url,    
 *  }
 * }
 * 
 * Example: "http://localhost:3000/show/erkek/giyim/t-shirt"
 * 
 * mainCategory: "erkek"
 * subheader: "giyim"
 * subcategory: "t-shirt"
 * url: "/show/erkek/giyim/t-shirt"
 * 
 */
class CategoryContainer extends Component {

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
        if(this.props.match.url !== prevProps.match.url) {
            this.initializeCategory();
        }
    }

    /**
     * Executes load operation with category objects
     */
    initializeCategory = () => {
        // Category paths that are fetched from url
        const { mainCategory, subheader, subcategory } = this.props.match.params;
        // Category objects created from paths
        const { _mainCategory, _subheader, _subcategory } = this.findCategoryWithPath(mainCategory, subheader, subcategory);
        this.loadProducts(_mainCategory, _subheader, _subcategory);
    }

    /**
     * Creates category objects according to the path given.
     */
    findCategoryWithPath = (mainCategory=null, subheader=null, subcategory=null) => {
        //All categories without hierarchy
        const allCategories = this.props.apiCategories;
        const _mainCategory = (mainCategory !== null) ? allCategories.filter(x => x.path === mainCategory)[0] : null;
        const _subheader = (_mainCategory !== null && subheader !== null) ? 
         allCategories.filter(x => x.path === subheader && x.parentId === _mainCategory.id)[0] : null;
        const _subcategory = (_subheader !== null && subcategory !== null) ? 
          allCategories.filter(x=> x.path === subcategory && x.parentId === _subheader.id)[0] : null;
        return {
          _mainCategory,
          _subheader,
          _subcategory
        }
    }

    /**
     * Determines the category hierarchy and creates an array of category ids.
     * Fetches the product list according to category ids.
     */
    loadProducts = (_mainCategory, _subheader, _subcategory) => {
        let categoryIds = [];
        if(!isNullOrUndefined(_subcategory)) {
            categoryIds = [_subcategory.id]
        }else if(!isNullOrUndefined(_subheader)) {
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
    findChildrenCategoryIds = (id) => {
        const allCategories = this.props.apiCategories;
        return allCategories.filter(x => x.parentId === id).map(x => x.id); 
    }

    render() {
        console.log("category container props", this.props);
        // Category paths that are fetched from url
        const { mainCategory, subheader, subcategory } = this.props.match.params;
        // Category objects created from paths
        const categories = this.findCategoryWithPath(mainCategory, subheader, subcategory);
        console.log("cateogyr container", this.props);
        return (
            <div className="category-container">
                {/* Create Breadcrumb with category objects */}
                <BreadCrumb categories={categories} />
                <div className="container">
                    <div className="row">
                        <div id="aside" className="col-sm-6 col-md-3">
                            {/* Filter Component */}
                            <Filter url={this.props.match.url} currentCategories={categories}/>
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
        )
    }
}

const mapStateToProps = state => {
    return {
      apiCategories: state.category.categories,
      apiProducts: state.product.productList,
      fetchInProgress: state.product.fetchInProgress
    };
};
  
const mapDispatchToProps = {
    getProductList,
    getProductListWithCategory
};
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CategoryContainer);
