import React, { Component } from "react";
import "./filter.css";
import { connect } from "react-redux";
import { fetchAllCities } from "../../redux/city/actions";
import { fetchAllBrands } from "../../redux/brand/actions";
//Components
import BrandSelectBox from "../brand-select-box/brand-select-box";
import CitySelectBox from "../city-select-box/city-select-box";
import CategorySelectBox from "../category-select-box/category-select-box";
import PriceFilter from "../price-filter/price-filter";

class Filter extends Component {
  componentDidMount() {
    this.props.fetchAllBrands();
    this.props.fetchAllCities();
  }

  render() {
    return (
      <div className="aside-filter">
        {/* Category Filter */}
        <CategorySelectBox currentCategories={this.props.currentCategories} />
        {/* Price Filter */}
        <PriceFilter />
        {/* Brand Filter */}
        <BrandSelectBox currentBrands={this.props.brandList} />
        {/* City Filter */}
        <CitySelectBox currentCities={this.props.cityList} />
      </div>
    );
  }
}

const mapDispatchToProps = {
  fetchAllBrands,
  fetchAllCities
};

export default connect(
  null,
  mapDispatchToProps
)(Filter);
