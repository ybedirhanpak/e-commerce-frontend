import React, { Component } from "react";

//Redux
import { connect } from "react-redux";
import { updateFilters } from "../../redux/product/actions";
import { getProductListWithFilter } from "../../redux/product/actions";

class StoreTopFilter extends Component {
  handleSortChange = event => {
    console.log("changed", event.target.value);
    this.props.updateFilters({
      type: "sortBy",
      sortBy: event.target.value
    });
  };

  handleShowChange = event => {
    this.props.updateFilters({
      type: "show",
      show: event.target.value
    });
  };
  applyFilters = () => {
    this.props.getProductListWithFilter(this.props.filters);
  };

  render() {
    return (
      <div className="store-filter clearfix">
        <div className="store-sort">
          <label>
            Sort By:
            <select className="input-select" onChange={this.handleSortChange}>
              <option value="new">New</option>
              <option value="priceLowToHigh">Price (Low to High)</option>
              <option value="priceHighToLow">Price (High to Low)</option>
            </select>
          </label>

          <label>
            Show:
            <select className="input-select" onChange={this.handleShowChange}>
              <option value="20">20</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
          </label>
          <button className="btn btn-danger" onClick={this.applyFilters}>
            Apply
          </button>
        </div>

        <ul className="store-grid">
          <li className="active">
            <i className="fa fa-th" />
          </li>
          <li>
            <a href="filter">
              <i className="fa fa-th-list" />
            </a>
          </li>
        </ul>
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
  updateFilters,
  getProductListWithFilter
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StoreTopFilter);
