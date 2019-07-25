import React, { Component } from "react";
import './filter.css';

//Components
import BrandSelectBox from "../brand-select-box/brand-select-box";
import CitySelectBox from "../city-select-box/city-select-box";
import CategorySelectBox from "../category-select-box/category-select-box";
import PriceFilter from "../price-filter/price-filter";

export default class Filter extends Component {
  render() {
    console.log("Filter props:", this.props);
    return (
      <div className="aside-filter">
        {/* Category Filter */}
        <CategorySelectBox currentCategories={this.props.currentCategories} />
        {/* Price Filter */}
        <PriceFilter />
        {/* Brand Filter */}
        <BrandSelectBox currentBrands={this.props.brandList}/>
        {/* City Filter */}
        <CitySelectBox currentCities={this.props.cityList}/>
      </div>
    );
  }
}
