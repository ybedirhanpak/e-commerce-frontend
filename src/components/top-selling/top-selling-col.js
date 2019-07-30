import React, { Component } from "react";

import TopSellingProduct from "./top-selling-product";

export default class TopSellingCol extends Component {
  render() {
    return (
      <div className="col-md-4 col-xs-6">
        <div className="section-title">
          <h4 className="title">Top selling</h4>
          <div className="section-nav">
            <div id="slick-nav-3" className="products-slick-nav" />
          </div>
        </div>

        <div>
          <TopSellingProduct />

          <TopSellingProduct />

          <TopSellingProduct />
        </div>

        <div>
          <TopSellingProduct />

          <TopSellingProduct />
        </div>
      </div>
    );
  }
}
