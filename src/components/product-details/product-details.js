import React, { Component } from "react";
import { isNullOrUndefined } from "util";
import LoadingSpinner from "../loading-spinner/loading-spinner";

//Redux
import { connect } from "react-redux";
import { actionCreators } from "../../redux/cart/actions";
import { isEmptyTypeAnnotation } from "@babel/types";

class ProductDetails extends Component {
  //SİZE SEÇMEYİ BİTİR
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
      size: this.props.product.sizeOptions
        ? this.props.product.sizeOptions[0]
        : "Medium"
    };

    this.createOption = this.createOption.bind(this);
    this.handleAddtoChart = this.handleAddtoChart.bind(this);
    this.createAverageOfStar = this.createAverageOfStar.bind(this);
    this.quantityOnChangeHandler = this.quantityOnChangeHandler.bind(this);
    this.isEmpty = this.isEmpty.bind(this);
    this.onChangeOptions = this.onChangeOptions.bind(this);
    this.qtyIncreaseOnClick = this.qtyIncreaseOnClick.bind(this);
    this.qtyDecreaseOnClick = this.qtyDecreaseOnClick.bind(this);
  }
  createAverageOfStar = product => {
    let children = [];
    let div = [];
    let sum = 0;
    console.log(product);
    for (let i = 0; i < product.stars; i++) {
      children.push(<i className="fa fa-star" />);
    }
    for (let j = product.stars; j < 5; j++) {
      children.push(<i className="fa fa-star-o" />);
    }
    div.push(<div className="product-rating">{children}</div>);
    console.log(product.stars);
    return div;
  };

  isEmpty(obj) {
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) return false;
    }
    return true;
  }
  createOption = product => {
    console.log(this.props);
    let sizeOptions = [];
    console.log(this.props.product);
    if (
      isNullOrUndefined(this.props.product) ||
      this.isEmpty(this.props.product)
    ) {
      return <LoadingSpinner />;
    } else {
      console.log(this.props.product, product);
      product.sizeOptions.forEach(element => {
        sizeOptions.push(
          <option name="size" value={element}>
            {element}
          </option>
        );
      });
      console.log(sizeOptions);
      return sizeOptions;
    }
  };
  qtyIncreaseOnClick() {
    let newQty = this.state.quantity + 1;
    if (newQty > this.props.product.quantity) {
      newQty--;
    }
    this.setState({ quantity: newQty });
  }
  qtyDecreaseOnClick() {
    let newQty = this.state.quantity - 1;
    if (newQty <= 0) {
      newQty = 1;
    }
    this.setState({ quantity: newQty });
  }

  onChangeOptions(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  quantityOnChangeHandler(event) {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({ quantity: Number(value) });
  }

  handleAddtoChart = () => {
    if (Number(this.state.quantity) === 0) {
      this.props.addtoCART({
        id: this.props.product.id,
        img: this.props.product.imgSource,
        name: this.props.product.name,
        rawPrice: this.props.product.price,
        quantity: 1,
        price: Number(this.props.product.price) * 1,
        oldPrice: this.props.product.oldPrice,
        size: this.state.size
      });
    } else {
      this.props.addtoCART({
        id: this.props.product.id,
        img: this.props.product.imgSource,
        name: this.props.product.name,
        rawPrice: this.props.product.price,
        quantity: this.state.quantity,
        price: Number(this.props.product.price) * this.state.quantity,
        oldPrice: this.props.product.oldPrice,
        size: this.state.size
      });
    }
  };

  render() {
    const product = this.props.product;
    console.log("render", product);
    return (
      <div className="product-details">
        <h2 className="product-name">{product.name}</h2>
        <div>
          <a className="review-link" href="add-review">
            {isNullOrUndefined(this.props.product.reviews)
              ? "0"
              : this.props.product.reviews.length}
            Review(s) | Add your review
          </a>
        </div>
        <div>
          <h3 className="product-price">
            {"$" + product.price}
            <del className="product-old-price">{"$" + product.oldPrice}</del>
          </h3>
          <span className="product-available">
            {product.quantity > 0
              ? "In Stock (" + product.quantity + ")"
              : "Not In Stock"}
          </span>
        </div>
        <p>{product.description}</p>
        <div className="product-options">
          <label>
            Size
            <select
              className="input-select"
              name="size"
              onChange={this.onChangeOptions}
            >
              {this.createOption(product)}
            </select>
          </label>
        </div>
        <div className="add-to-cart">
          <div className="qty-label">
            Qty
            <div className="input-number">
              <input
                id="quantityInput"
                name="quantity"
                onChange={this.quantityOnChangeHandler}
                type="number"
                placeholder={1}
                value={this.state.quantity >= 1 ? this.state.quantity : ""}
              />
              <span onClick={this.qtyIncreaseOnClick} className="qty-up">
                +
              </span>
              <span onClick={this.qtyDecreaseOnClick} className="qty-down">
                -
              </span>
            </div>
          </div>
          <button onClick={this.handleAddtoChart} className="add-to-cart-btn">
            <i className="fa fa-shopping-cart" /> add to cart
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  addtoCART: actionCreators.addtoCART
};

export default connect(
  null,
  mapDispatchToProps
)(ProductDetails);
