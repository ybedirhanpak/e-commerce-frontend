import React, { Component } from "react";
import { connect } from "react-redux";
import "./address-card.css";

import { Link } from "react-router-dom";

class AdressCard extends Component {
  createAddress = () => {
    const addressList = this.props.currentUser.addresses.map(
      (address, index) => {
        return (
          <div
            key={`${address.addressName}-${index}`}
            className="col-xs-12 col-md-6"
          >
            <div className="card card-2">
              <h4>{address.addressName}</h4>
              <hr />
              <h5>
                {this.props.currentUser.firstName}{" "}
                {this.props.currentUser.lastName}
              </h5>
              <p className="order-address-p">{address.address}</p>
              <br />
              <button
                className="btn btn-danger"
                value="Delete"
                style={{ marginRight: 10 }}
              >
                Delete
              </button>
              <button className="btn btn-warning" value="Edit">
                Edit
              </button>
            </div>
          </div>
        );
      }
    );

    return addressList;
  };
  render() {
    return (
      <div className="row">
        <div className="col-xs-12 col-md-6">
          <div className="card card-2">
            <Link to="/account/addAddress" style={{ paddingTop: 80 }}>
              Add New Address{" "}
              <button className="btn btn-danger" type="button">
                +
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
    currentUser: state.user.currentUser
  };
};

export default connect(mapStateToProps)(AdressCard);
