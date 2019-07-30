import React, { Component } from "react";
import Checkoutadress from "../../components/checkout-address/checkout-adress";
import ChechkoutOrder from "../../components/checkout-order/checkout-order";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class CheckoutContainer extends Component {
  render() {
    if (!this.props.currentUser) {
      return <Redirect to="/login" />;
    } else {
      return (
        <div className="container" style={{ padding: 40 }}>
          <div className="row">
            <div className="col-md-7">
              <Checkoutadress />
            </div>
            <div className="col-md-5 order-details">
              <ChechkoutOrder cart={this.props.cart} />
            </div>
          </div>
        </div>
      );
    }
  }
}
const mapStateToProps = state => {
  return {
    cart: state.cart,
    currentUser: state.user.currentUser
  };
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckoutContainer);
