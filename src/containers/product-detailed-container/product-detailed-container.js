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

class ProductDetailedContainer extends Component {
  componentDidMount() {
    this.props.getProduct(this.props.productId);
  }

  render() {
    console.log("Product detailed props", this.props)
    return (
      <div className="product-detailed">
        <BreadCrumb params={this.props.categories} product={this.props.product}/>
        <div className="container">
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
        <div className="row">
          <div className="col-sm-12">
            <ProductTab product={this.props.product} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    product: state.product.currentProduct
  };
};

const mapDispatchToProps = {
  getProduct
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetailedContainer);
