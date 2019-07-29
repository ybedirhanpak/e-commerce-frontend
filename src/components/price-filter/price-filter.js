import React, { Component } from "react";
import { connect } from "react-redux";
import { updateFilters } from "../../redux/product/actions";

import { Link } from "react-router-dom";

class PriceFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      minPrice: "",
      maxPrice: ""
    };
    this.setValue = this.setValue.bind(this);
    this.increaseMinClick = this.increaseMinClick.bind(this);
    this.decreaseMinClick = this.decreaseMinClick.bind(this);
    this.increaseMaxClick = this.increaseMaxClick.bind(this);
    this.decreaseMaxClick = this.decreaseMaxClick.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    if (Number(this.state.minPrice) > Number(this.state.maxPrice)) {
      this.setState({
        minPrice: this.state.maxPrice,
        maxPrice: this.state.minPrice
      });
      this.props.updateFilters({
        type: "price",
        priceFilter: {
          min: this.state.maxPrice,
          max: this.state.minPrice
        }
      });
    } else {
      this.props.updateFilters({
        type: "price",
        priceFilter: {
          min: this.state.minPrice,
          max: this.state.maxPrice
        }
      });
    }
  };

  setValue = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  increaseMaxClick = () => {
    if (this.state.maxPrice === "") {
      this.setState({ maxPrice: "100" });
    } else {
      const newMaxPrice = Number(this.state.maxPrice) + 100;
      this.setState({ maxPrice: String(newMaxPrice) });
    }
  };

  decreaseMaxClick = () => {
    let newMaxPrice = Number(this.state.maxPrice) - 100;
    if (newMaxPrice < 0) {
      newMaxPrice = "0";
    } else if (newMaxPrice < Number(this.state.minPrice)) {
      newMaxPrice = this.state.minPrice;
    }
    this.setState({
      maxPrice: String(newMaxPrice)
    });
  };

  increaseMinClick = () => {
    let newMinPrice = Number(this.state.minPrice) + 100;
    if (this.state.minPrice === "") {
      newMinPrice = "100";
    }
    if (newMinPrice > Number(this.state.maxPrice)) {
      newMinPrice = this.state.maxPrice;
    }
    this.setState({ minPrice: String(newMinPrice) });
  };

  decreaseMinClick = () => {
    let newMinPrice = Number(this.state.minPrice) - 100;
    if (newMinPrice < 0) {
      newMinPrice = "0";
    }
    this.setState({
      minPrice: newMinPrice
    });
  };

  render() {
    console.log("lala", this.state);
    return (
      <div className="aside">
        <h3 className="aside-title">Price</h3>
        <div className="price-filter">
          <div id="price-slider" />
          <div className="input-number price-min">
            <input
              name="minPrice"
              id="price-min"
              type="number"
              value={this.state.minPrice}
              onChange={this.setValue}
              placeholder="Min"
            />
            <span onClick={this.increaseMinClick} className="qty-up">
              +
            </span>
            <span onClick={this.decreaseMinClick} className="qty-down">
              -
            </span>
          </div>
          <span>-</span>
          <div className="input-number price-max">
            <input
              name="maxPrice"
              id="maxPrice"
              type="number"
              value={this.state.maxPrice}
              onChange={this.setValue}
              placeholder="Max"
            />
            <span onClick={this.increaseMaxClick} className="qty-up">
              +
            </span>
            <span onClick={this.decreaseMaxClick} className="qty-down">
              -
            </span>
          </div>
          <button onClick={this.handleClick} className="btn">
            ->
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    filters: state.product.filters,
    productList: state.product.productList,
    fetchInProgress: state.product.fetchInProgress
  };
};

const mapDispatchToProps = {
  updateFilters
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PriceFilter);
