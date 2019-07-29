import React, { Component } from "react";
import OrderPageAddress from "../order-page-address/order-page-address";

class checkoutadress extends Component {
  render() {
    return (
      <div>
        <div className="shipping-details">
          <div className="section-title">
            <h3 className="title">Shiping address</h3>
          </div>
          <OrderPageAddress type="shipping" />
        </div>
        <div className="billing-details">
          <div className="section-title">
            <h3 className="title">Billing address</h3>
          </div>

          <div className="input-checkbox">
            <input type="checkbox" id="billing-address" />
            <label htmlFor="billing-address">
              <span />
              Bill to a diffrent address?
            </label>
            <div className="caption">
              <OrderPageAddress type="billing" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default checkoutadress;
