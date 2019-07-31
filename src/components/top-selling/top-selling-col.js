import React, { Component } from "react";

import TopSellingProduct from "./top-selling-product";

export default class TopSellingCol extends Component {
  generateProducts = () => {
    let products = [];
    for (let i = 0; i < 3; i++) {
      var min = 0;
      var max = this.props.products.length;
      var random = Math.floor(Math.random() * (+max - +min)) + +min;
      products.push(
        <div key={this.props.products[random].id + "-" + i}>
          <TopSellingProduct product={this.props.products[random]} />
        </div>
      );
    }

    return products;
  };

  render() {
    return (
      <div className="col-md-4 col-xs-6">
        <div className="section-title">
          <h4 className="title">Top selling</h4>
          <div className="section-nav">
            <div id="slick-nav-3" className="products-slick-nav" />
          </div>
        </div>
        {this.generateProducts()}
      </div>
    );
  }
}
