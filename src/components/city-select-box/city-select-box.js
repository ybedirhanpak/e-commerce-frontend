import React, { Component } from "react";
import "./city-select-box";
import { connect } from "react-redux";

import { updateFilters } from "../../redux/product/actions";

class CitySelectBox extends Component {
  generateCity = () => {
    let cities = [];
    this.props.currentCities.map(element => {
      if (
        this.props.allCities.filter(temp => element === temp.id)[0] !==
        undefined
      ) {
        cities.push(
          this.props.allCities.filter(temp => element === temp.id)[0]
        );
      }
    });

    return cities;
  };

  handleClick = (event, subcategoryChecked) => {
    const filterCities = this.props.filterCities;
    let newFilterCities = [];
    if (subcategoryChecked) {
      newFilterCities = filterCities.filter(x => x !== event.target.value);
    } else {
      newFilterCities = [...filterCities, event.target.value];
    }
    this.props.updateFilters({
      type: "city_filter",
      cities: newFilterCities
    });
  };

  generateCityCheckBoxes = list => {
    const filterCities = this.props.filterCities;
    const cityList = list.map((city, index) => {
      const cityChecked = filterCities.includes(city.id);
      return (
        <div key={index} id={city.id}>
          <div className="input-checkbox">
            <input
              readOnly
              checked={cityChecked}
              type="checkbox"
              id={city.id + "-" + index}
              value={city.id}
              onClick={event => this.handleClick(event, cityChecked)}
            />
            <label htmlFor={city.id + "-" + index}>
              <span />
              {city.name}
            </label>
          </div>
        </div>
      );
    });
    return cityList;
  };

  render() {
    return (
      <div>
        <div className="aside">
          <h3 className="aside-title">{"Cities"}</h3>
          <div className="scrollable">
            {this.generateCityCheckBoxes(this.generateCity())}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    allCities: state.city.cityList,
    filterCities: state.product.filters.cities
  };
};

const mapDispatchToProps = {
  updateFilters
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CitySelectBox);
