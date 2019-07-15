import React, { Component } from "react";

//Redux
import { connect } from "react-redux";
import { getProduct } from "../../redux/product/actions";

//Components
import ProductMainImg from "../../components/product-main-img/product-main-img";
import ProductDetails from "../../components/product-details/product-details";
import ProductTab from "../../components/product-tab/product-tab";

class ProductDetailedContainer extends Component {
  componentDidMount() {
    this.props.getProduct(this.props.productId);
  }

  render() {
    return (
      <div className="section">
          <div className="container">
              <div className="row">
                  <div class="col-md-7">
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
