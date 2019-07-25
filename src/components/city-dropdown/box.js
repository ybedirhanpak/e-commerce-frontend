import React, { Component } from "react";
import "./box.css";

class Box extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showItems: false,
      selectedCity: null
    };
    this.selectCity = this.selectCity.bind(this);
  }

  selectCity(item) {
    this.setState({
      selectedCity: item
    });
  }

  render() {
    const cities = this.props.data.map((element, index) => (
      <div className="input-checkbox" key={index}>
        <input type="checkbox" id={"category-" + index} />
        <label htmlFor={"category-" + index}>
          <span />
          {element}
        </label>
      </div>
    ));

    return (
      <div className="box-filter">
        <h3 className="aside-title">Select City</h3>
        <div className="aside scrollable">
          <div>{cities}</div>
        </div>
      </div>
    );
  }
}

export default Box;
