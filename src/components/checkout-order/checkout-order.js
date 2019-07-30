import React, { Component } from "react";
import { connect } from "react-redux";
import { actionCreators } from "../../redux/cart/actions";
import { postOrderCheckout } from "../../redux/order/actions";

class CheckoutOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      payment: "",
      termsChecked: false,
      orderNotes: ""
    };

    this.createOrderCart = this.createOrderCart.bind(this);
    this.onChange = this.onChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.termClick = this.termClick.bind(this);
  }

  onChange = event => {
    this.setState({
      orderNotes: event.target.value
    });
  };

  handleClick = event => {
    this.setState({
      payment: event.target.value
    });
  };

  termClick = (event, prevState) => {
    this.setState({
      termsChecked: !prevState.termsChecked
    });
  };

  handleDecrease = (event, product) => {
    event.preventDefault();
    this.props.updateQuantity({ ...product, quantity: -1 });
  };

  createOrderCart = () => {
    if (!this.props.cart.anyProduct) {
      return (
        <div>
          <strong>SEPETİNİZ BOŞ</strong>
        </div>
      );
    } else {
      const resultList = this.props.cart.productsList.map(product => (
        <div
          className="order-col"
          style={{ marginBottom: 10 }}
          key={product.id}
        >
          <div className="input-number">
            <span
              className="qty-up"
              onClick={event => this.handleIncrease(event, product)}
            >
              +
            </span>
            <span
              className="qty-down"
              onClick={event => this.handleDecrease(event, product)}
            >
              -
            </span>
          </div>
          <div>
            {product.quantity + "x " + product.name} {}
          </div>
          <div>${Number(product.price).toFixed(2)}</div>
        </div>
      ));
      return resultList;
    }
  };

  submitOrder = () => {
    if (this.state.termsChecked === false) {
      alert("Please check Terms & Condiditons");
    } else {
      const orderContent = {
        shippingAddress: this.props.orderAddress.selectedShippingAddress,
        billingAddress: this.props.orderAddress.selectedBillingAddress,
        orderTrack: "Pending",
        paymentType: this.state.payment,
        orderNotes: this.state.orderNotes,
        orderedProducts: this.props.orderedProducts,
        orderTotal: this.props.cart.totalPrice,

        userId: this.props.userId
      };
      this.props.postOrderCheckout(orderContent);
    }
  };

  render() {
    console.log("checkout order props", this.props);
    console.log("checkout order state", this.state);

    return (
      <div>
        <div className="section-title text-center">
          <h3 className="title">Your Order</h3>
        </div>
        <div className="order-summary">
          <div className="order-col">
            <div>
              <strong>PRODUCT</strong>
            </div>
            <div>
              <strong>TOTAL</strong>
            </div>
          </div>
          {this.createOrderCart()}
          <div className="order-col">
            <div>Shiping</div>
            <div>
              <strong>FREE</strong>
            </div>
          </div>
          <div className="order-col">
            <div>
              <strong>TOTAL</strong>
            </div>
            <div>
              <strong className="order-total">
                ${Number(this.props.cart.totalPrice).toFixed(2)}
              </strong>
            </div>
          </div>
        </div>
        <div className="payment-method">
          <div className="input-radio">
            <input
              type="radio"
              name="payment"
              id="payment-1"
              value="Direct Bank"
              onChange={this.handleClick}
            />
            <label htmlFor="payment-1">
              <span />
              Direct Bank Transfer
            </label>
            <div className="caption">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          <div className="input-radio">
            <input
              type="radio"
              name="payment"
              id="payment-2"
              value="Cheque"
              onChange={this.handleClick}
            />
            <label htmlFor="payment-2" name="payment">
              <span />
              Cheque Payment
            </label>
            <div className="caption">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          <div className="input-radio">
            <input
              type="radio"
              name="payment"
              id="payment-3"
              value="Paypal"
              onChange={this.handleClick}
            />
            <label htmlFor="payment-3">
              <span />
              Paypal System
            </label>
            <div className="caption">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
        <div className="input-checkbox">
          <input
            type="checkbox"
            id="terms"
            onClick={event => this.termClick(event, this.state)}
          />
          <label htmlFor="terms">
            <span />
            I've read and accept the <a href="#">terms & conditions</a>
          </label>
        </div>
        <br />
        <div className="order-notes">
          <textarea
            className="input"
            placeholder="Order Notes"
            name="orderNotes"
            onChange={this.onChange}
          />
        </div>
        <button
          href="#"
          className="primary-btn order-submit"
          onClick={this.submitOrder}
        >
          Place order
        </button>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    orderAddress: state.order,
    orderedProducts: state.cart.productsList,
    userId: state.user.currentUser.id
  };
};

const mapDispatchToProps = {
  updateQuantity: actionCreators.addtoCART,
  postOrderCheckout
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckoutOrder);
