import React, { Component } from "react";
import './box.css';

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
      <div className="input-checkbox" key={index}>
        <input type="checkbox" id={"category-" + index} />
        <label htmlFor={"category-" + index}>
          <span />
          {element.name}
        </label>
      </div>
    ));

    return (
      <div className="box-filter">
        <div className="aside">
          <h3 className="aside-title" onClick={this.dropDown}>
           Select City
          </h3>
          {(this.state.showItems) ? (<div>{cities}</div>) : (null)}
        </div>
      </div>
    );
  }
}

export default Box;
