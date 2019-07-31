import React, { Component } from "react";
import CartProduct from "../cart-product/index";

//Route
import { Link } from "react-router-dom";

//Redux
import { connect } from "react-redux";

class Cart extends Component {
  constructor(props) {
    super(props);

    //Bind Functions
    this.createProductCart = this.createProductCart.bind(this);
  }

  createProductCart = () => {
    if (!this.props.cart.anyProduct) {
      return (
        <div>
          <strong>SEPETİNİZ BOŞ</strong>
        </div>
      );
    } else {
      const resultList = this.props.cart.productsList.map(product => (
        <CartProduct cartProduct={product} key={product.id} />
      ));
      return resultList;
    }
  };

  render() {
    return (
      <div className="dropdown">
        <button
          className="btn btn-default btn-rounded my-6 dropdown-toggle"
          data-toggle="dropdown"
          aria-expanded="true"
          href="cart"
        >
          <i className="fa fa-shopping-cart" />
          <span>{" Your Cart"}</span>
        </button>
        <div className="cart-dropdown">
          <div className="cart-list">{this.createProductCart()}</div>
          <div className="cart-summary">
            <small>
              {this.props.cart.productsList.length} Item(s) selected
            </small>
            <h5>SUBTOTAL: ${Number(this.props.cart.totalPrice).toFixed(2)}</h5>
          </div>
          <div className="cart-btns">
            <Link to="/checkout">View Cart</Link>
            <Link to="/checkout">
              Checkout <i className="fa fa-arrow-circle-right" />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cart
  };
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
