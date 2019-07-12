import React, { Component } from "react";
import { connect } from "react-redux";
//Components
import ProductCard from "../../components/product-card/index";

import { getProduct } from "../../redux/product/actions";

class ProductDetailedContainer extends Component {
  componentDidMount() {
    this.props.getProduct(this.props.location.state.id);
  }

  render() {
    return (
      <div>
        <ProductCard product={this.props.product} />
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
