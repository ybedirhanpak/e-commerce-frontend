import React, { Component } from "react";

import TopSellingCol from "./top-selling-col";

export default class TopSelling extends Component {
  render() {
    return (
      <div>
        <div className="section">
          <div className="container">
            <div className="row">
              <TopSellingCol />
              <TopSellingCol />
              <TopSellingCol />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
