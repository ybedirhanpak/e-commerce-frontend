import React, { Component } from "react";
import { connect } from "react-redux";

import { updateFilters } from "../../redux/product/actions";
import "./brand-select-box";

class BrandsSelectBox extends Component {
  generateBrands = () => {
    let brands = [];
    this.props.currentBrands.map(element => {
      if (
        this.props.allBrands.filter(temp => element === temp.id)[0] !==
        undefined
      ) {
        brands.push(
          this.props.allBrands.filter(temp => element === temp.id)[0]
        );
      }
    });

    return brands;
  };

  handleClick = (event, brandChecked) => {
    const filterBrands = this.props.filterBrands;
    let newFilterBrands = [];
    if (brandChecked) {
      newFilterBrands = filterBrands.filter(x => x !== event.target.value);
    } else {
      newFilterBrands = [...filterBrands, event.target.value];
    }
    this.props.updateFilters({
      type: "brand_filter",
      brands: newFilterBrands
    });
  };

  generateBrandCheckBoxes = list => {
    const filterBrands = this.props.filterBrands;
    const brandsList = list.map((brand, index) => {
      const brandChecked = filterBrands.includes(brand.id);
      return (
        <>
          <div key={index} id={brand.id}>
            <div className="input-checkbox">
              <input
                checked={brandChecked}
                type="checkbox"
                id={brand.id + "-" + index}
                value={brand.id}
                onClick={event => this.handleClick(event, brandChecked)}
              />
              <label htmlFor={brand.id + "-" + index}>
                <span />
                {brand.name}
              </label>
            </div>
          </div>
        </>
      );
    });
    return brandsList;
  };

  render() {
    return (
      <div>
        <div className="aside">
          <h3 className="aside-title">{"Brands"}</h3>
          <div className="scrollable">
            {this.generateBrandCheckBoxes(this.generateBrands())}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    allBrands: state.brand.brandList,
    filterBrands: state.product.filters.brands
  };
};

const mapDispatchToProps = {
  updateFilters
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BrandsSelectBox);
