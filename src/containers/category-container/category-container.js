import React, { Component } from 'react'

//Components
import Store from '../../components/store/store';
import Filter from '../../components/filter/index';
import BreadCrumb from '../../components/breadcrumb/breadcrumb'

//Redux
import { connect } from "react-redux";
import { getProductList, getProductListWithCategory } from "../../redux/product/actions";
import { isNullOrUndefined } from 'util';

class CategoryContainer extends Component {

    componentDidMount() {
        this.initializeCategory();
    }

    componentDidUpdate(prevProps) {
        if(this.props.match.url !== prevProps.match.url) {
            this.initializeCategory();
        }
    }

    initializeCategory = () => {
        const { mainCategory, subheader, subcategory } = this.props.match.params;
        const { _mainCategory, _subheader, _subcategory } = this.findCategoryWithPath(mainCategory, subheader, subcategory);
        this.loadProducts(_mainCategory, _subheader, _subcategory);
    }

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

    loadProducts = (_mainCategory, _subheader, _subcategory) => {
        let categoryIds = [];
        if(!isNullOrUndefined(_subcategory)) {
            this.props.getProductListWithCategory([_subcategory.id]);
        }else if(!isNullOrUndefined(_subheader)) {
            categoryIds = this.findChildrenCategoryIds(_subheader.id);
            this.props.getProductListWithCategory(categoryIds);
        } else if(!isNullOrUndefined(_mainCategory)){
            const subheaderIds = this.findChildrenCategoryIds(_mainCategory.id);
            categoryIds = subheaderIds.map(x => this.findChildrenCategoryIds(x)).flat(1);
            this.props.getProductListWithCategory(categoryIds);
        }
    }

    findChildrenCategoryIds = (id) => {
        const allCategories = this.props.apiCategories;
        return allCategories.filter(x => x.parentId === id).map(x => x.id); 
    }

    render() {
        const { mainCategory, subheader, subcategory, productId } = this.props.match.params;
        const categories = this.findCategoryWithPath(mainCategory, subheader, subcategory);
        return (
            <div className="category-container">
                <BreadCrumb params={categories} productId={productId}/>
                <div className="container">
                    <div className="row">
                        <div id="aside" className="col-sm-6 col-md-3">
                            {/* Filter Component */}
                            <Filter/>
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
