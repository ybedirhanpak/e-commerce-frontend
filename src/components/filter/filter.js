import React, { Component } from "react";
import "./filter.css";

//Redux
import { connect } from "react-redux";
import { fetchAllCities } from "../../redux/city/actions";
import { fetchAllBrands } from "../../redux/brand/actions";
import { getProductListWithFilter } from "../../redux/product/actions";

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

  applyFilters = () => {
    this.props.getProductListWithFilter(this.props.filters);
  };

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
        <button
          className="btn btn-danger"
          style={{ float: "right", marginTop: 20 }}
          onClick={this.applyFilters}
        >
          Apply
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    filters: state.product.filters
  };
};

const mapDispatchToProps = {
  fetchAllBrands,
  fetchAllCities,
  getProductListWithFilter
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter);
