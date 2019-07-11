import React, { Component } from "react";


class Box extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showItems: false,
      selectedCity: null
    };
    this.selectCity = this.selectCity.bind(this);
  }

  dropDown = () => {
    this.setState(prevState => ({
      showItems: !prevState.showItems
    }));
  };

  selectCity(item) {
    this.setState({
      selectedCity: item
    });
  }

  render() {
    const cities = this.props.data.map((element, index) => (
      <div className="input-checkbox">
        <input type="checkbox" id={"category-" + index} />
        <label for={"category-" + index}>
          <span />
          {element.name}
        </label>
      </div>
    ));

    return (
      
        <div className="aside">
          <h3 className="aside-title" onClick={this.dropDown}>
           Select City
          </h3>
          {this.state.showItems && <div className="checkbox-filter">{cities}</div>}
        </div>

    );
  }
}

export default Box;
