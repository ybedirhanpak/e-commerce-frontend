import React, { Component } from "react";
import "./order-page-address.css";

//Redux
import { connect } from "react-redux";
import { actionCreators } from "../../redux/order/actions";

//Router
import { Link } from "react-router-dom";

class OrderPageAddress extends Component {
  constructor(props) {
    super(props);
  }

  handleClick = (event, address) => {
    if (this.props.type === "shipping") {
      this.props.selectShippingAddress(address);
      this.props.selectBillingAddress(address);
    } else if (this.props.type === "billing") {
      this.props.selectBillingAddress(address);
    }
  };

  createAddress = () => {
    const addressList = this.props.currentUser.addresses.map(address => {
      return (
        <div key={address.id} className="col-xs-12 col-md-6">
          <div class="card card-2">
            <h4>{address.addressName}</h4>
            <hr />
            <h5>
              {this.props.currentUser.firstName}{" "}
              {this.props.currentUser.lastName}
            </h5>
            <p className="order-address-p">{address.address}</p>
            <br />
            <input
              className="btn btn-danger"
              type="button"
              value="Select"
              onClick={event => this.handleClick(event, address)}
            />
          </div>
        </div>
      );
    });

    return addressList;
  };
  render() {
    return (
      <div className="row order-page-address">
        <div className="col-xs-12 col-md-6">
          <div class="card card-2">
            <Link to="/account/addAddress">
              To add adress{" "}
              <button className="btn btn-danger" type="button">
                click
              </button>
            </Link>
          </div>
        </div>
        {this.createAddress()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.user.currentUser,
    order: state.order
  };
};

const mapDispatchToProps = {
  selectShippingAddress: actionCreators.selectShippingAddress,
  selectBillingAddress: actionCreators.selectBillingAddress
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderPageAddress);
