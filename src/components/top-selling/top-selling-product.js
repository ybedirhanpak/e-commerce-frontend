import React, { Component } from "react";

export default class TopSellingProduct extends Component {
  render() {
    return (
      <div className="product-widget">
        <div className="product-img">
          <img src="./img/product02.png" alt="" />
        </div>
        <div className="product-body">
          <p className="product-category">Category</p>
          <h3 className="product-name">
            <a href="#">product name goes here</a>
          </h3>
          <h4 className="product-price">
            $980.00 <del className="product-old-price">$990.00</del>
          </h4>
        </div>
      </div>
    );
  }
}
