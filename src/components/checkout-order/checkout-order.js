import React, { Component } from "react";
import { connect } from "react-redux";
import { actionCreators } from "../../redux/cart/actions";
import { postOrderCheckout, resetOrder } from "../../redux/order/actions";
import { Link } from "react-router-dom";

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

  handleIncrease = (event, product) => {
    event.preventDefault();
    this.props.updateQuantity({ ...product, quantity: 1 });
  };

  handleDecrease = (event, product) => {
    event.preventDefault();
    console.log(product);

    if (product.quantity <= 1) {
      this.props.deleteFromCART(product);
    } else {
      this.props.updateQuantity({ ...product, quantity: -1 });
    }
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
    if (
      this.state.termsChecked === false ||
      this.state.payment === "" ||
      this.props.orderAddress === ""
    ) {
      alert("Please check all fields!");
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

  componentDidMount() {
    this.props.resetOrder();
  }

  render() {
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
            I've read and accept the <Link to="/terms">terms & conditions</Link>
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
        <button className="primary-btn order-submit" onClick={this.submitOrder}>
          Place order
        </button>
        {this.props.orderInProgress === 0 ? (
          <div style={{ marginTop: 20, backgroundColor: "pink", height: 40 }}>
            <h5 className="alert-heading">sipraiş veriliyor</h5>
          </div>
        ) : this.props.orderInProgress === 1 ? (
          <div
            style={{
              marginTop: 20,
              backgroundColor: "#00cc00",
              height: 40
            }}
          >
            <h5 className="alert-heading">Order added succesfully...</h5>
          </div>
        ) : null}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    orderAddress: state.order,
    orderedProducts: state.cart.productsList,
    userId: state.user.currentUser.id,
    orderInProgress: state.order.orderInProgress
  };
};

const mapDispatchToProps = {
  updateQuantity: actionCreators.addtoCART,
  deleteFromCART: actionCreators.deletefromCART,
  postOrderCheckout,
  resetOrder
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckoutOrder);
