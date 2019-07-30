import React, { Component } from "react";

import TopSellingCol from "./top-selling-col";

export default class TopSelling extends Component {
  render() {
    return (
      <div>
        <div className="section">
          <div className="container">
            <div className="row">
              <TopSellingCol products={this.props.products} />
              <TopSellingCol products={this.props.products} />
              <TopSellingCol products={this.props.products} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
