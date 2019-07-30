import React, { Component } from "react";

import ProductCard from "../product-card/index";
import Slider from "react-slick";

export default class ProductSlide extends Component {
  generateProducts = () => {
    const productsList = this.props.products.map((product, index) => {
      return (
        <div key={`${product.id}-${index}`}>
          <ProductCard product={product} />
        </div>
      );
    });

    return productsList;
  };

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    };

    return (
      <div>
        <h3>New Products</h3>
        <Slider {...settings}>{this.generateProducts()}</Slider>
      </div>
    );
  }
}
