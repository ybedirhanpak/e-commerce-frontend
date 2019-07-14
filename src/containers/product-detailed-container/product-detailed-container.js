import React, { Component } from "react";
import { connect } from "react-redux";
//Components
import ProductCard from "../../components/product-card/index";

import { getProduct } from "../../redux/product/actions";
//Components
import ProductMainImg from "../../components/product-main-img/product-main-img";
import ProductThumb from "../../components/product-thumb/product-thumb";
import ProductDetails from "../../components/product-details/product-details";
import ProductTab from "../../components/product-tab/product-tab";

class ProductDetailedContainer extends Component {
  componentDidMount() {
    this.props.getProduct(this.props.location.state.id);
  }

  render() {
    return (
      <div className="section">
          <div className="container">
              <div className="row">
                  <div class="col-md-5 col-md-push-2">
                      <ProductMainImg/>
                  </div>
                  <div className="col-md-2  col-md-pull-5">
                      {/* <ProductThumb/> */}
                  </div>
                  <div className="col-md-5">
                      <ProductDetails/>
                  </div>
                  <div className="col-md-12">
                      <ProductTab/>
                  </div>
              </div>
          </div>
      </div>
    )
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
