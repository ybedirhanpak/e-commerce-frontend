import React, { Component } from "react";
import "./brand-select-box";

export default class BrandsSelectBox extends Component {

  generateBrandCheckBoxes = () => {
    const brandsList = this.props.currentBrands.map((brand, index) => (
      <div key={index}>
        <div className="input-checkbox">
          <input type="checkbox" id={brand + "-" + index} />
          <label htmlFor={brand + "-" + index}>
            <span />
            {brand}
          </label>
        </div>
      </div>
    ));
    return brandsList;
  }

  render() {
    console.log("Brand props:", this.props);
    return (
      <div>
        <div className="aside">
        <h3 className="aside-title">{'Brands'}</h3>
          <div className="scrollable">
          {this.generateBrandCheckBoxes()}
          </div>
        </div>
      </div>
    );
  }
}
