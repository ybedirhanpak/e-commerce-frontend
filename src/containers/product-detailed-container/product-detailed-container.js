import React, { Component } from "react";
import './product-detailed-container.css'

//Redux
import { connect } from "react-redux";
import { getProduct } from "../../redux/product/actions";

//Components
import ProductMainImg from "../../components/product-main-img/product-main-img";
import ProductDetails from "../../components/product-details/product-details";
import ProductTab from "../../components/product-tab/product-tab";
import BreadCrumb from '../../components/breadcrumb/breadcrumb'
import LoadingSpinner from '../../components/loading-spinner/loading-spinner';

class ProductDetailedContainer extends Component {
  componentDidMount() {
    this.props.getProduct(this.props.match.params.productId);
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

  render() {
    console.log("Product detailed props", this.props)

    const { mainCategory, subheader, subcategory } = this.props.match.params;
    const categories = this.findCategoryWithPath(mainCategory, subheader, subcategory);

    if(this.props.fetchInProgress) {
      return(
        <div className="container" style={{height:200}}>
          <LoadingSpinner/>
        </div>
      )
    }
    return (
      <div className="product-detailed">
        <BreadCrumb params={categories} product={this.props.product}/>
        <div className="container" style={{padding:40}}>
            <div className="row">
                <div className="col-md-7">
                    <ProductMainImg product={this.props.product}/>
                </div>
                <div className="col-md-5">
                    <ProductDetails product={this.props.product}/>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <ProductTab product={this.props.product}/>
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
    product: state.product.currentProduct,
    fetchInProgress: state.product.fetchInProgress
  };
};

const mapDispatchToProps = {
  getProduct
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetailedContainer);
