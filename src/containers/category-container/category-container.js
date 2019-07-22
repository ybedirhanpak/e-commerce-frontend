import React, { Component } from 'react'
import './category-container.css'

//Components
import Store from '../../components/store/store';
import Filter from '../../components/filter/index';
import BreadCrumb from '../../components/breadcrumb/breadcrumb'

//Redux
import { connect } from "react-redux";
import { getProductList, getProductListWithCategory } from "../../redux/product/actions";
import { isNullOrUndefined } from 'util';

class CategoryContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            _mainCategory: undefined,
            _subheader: undefined,
            _subcategory: undefined
        }
    }

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
        this.setState({
            _mainCategory, 
            _subheader, 
            _subcategory
        });
        this.loadProducts(this.state._mainCategory, this.state._subheader, this.state._subcategory);
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

    loadProducts = () => {
        let categoryIds = [];

        if(categoryIds.length !== 0) {
            console.log("categoryIds: ",categoryIds)
            this.props.getProductListWithCategory(categoryIds);
        } else {
            this.props.getProductList();
        }
    }

    findChildrenCategoryIds = (id) => {
        // const resultIdList = [];
        // const allCategories = this.props.apiCategories;
        // allCategories.filter(x => x.parentId === id).map(x => resultIdList.push(x.id));
        
    }

    render() {
        console.log("category-container props:", this.props);
        console.log("category-container state:", this.state);
        const { productId } = this.props.match.params;
        return (
            <div className="section category-container">
                <BreadCrumb params={this.props.categories} productId={productId}/>
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
