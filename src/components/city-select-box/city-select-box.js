import React, { Component } from "react";
import "./city-select-box";

export default class CitySelectBox extends Component {

  generateCityCheckBoxes = () => {
    const cityList = this.props.currentCities.map((city, index) => (
      <div key={index}>
        <div className="input-checkbox">
          <input type="checkbox" id={city + "-" + index} />
          <label htmlFor={city + "-" + index}>
            <span />
            {city}
          </label>
        </div>
      </div>
    ));
    return cityList;
  }

  render() {
    console.log("City props:", this.props);
    return (
      <div>
        <div className="aside">
        <h3 className="aside-title">{'Cities'}</h3>
          <div className="scrollable">
            {this.generateCityCheckBoxes()}
          </div>
        </div>
      </div>
    );
  }
}
