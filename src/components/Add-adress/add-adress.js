import React, { Component } from "react";

import { connect } from "react-redux";
import {
  addUserAddress,
  resetAddressAdd,
  postUserUpdate
} from "../../redux/User/actions";

class AddAdress extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      addressName: "",
      address: "",
      city: "",
      country: "",
      zipCode: "",
      tel: ""
    };

    this.onChange = this.onChange.bind(this);
    this.submitAddress = this.submitAddress.bind(this);
  }

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  submitAddress = event => {
    event.preventDefault();
    const addressContent = {
      addressName: this.state.addressName,
      address: this.state.address,
      city: this.state.city,
      country: this.state.country,
      zipCode: this.state.zipCode,
      Telephone: this.state.tel
    };

    const useradd = {
      addresses: [...this.props.currentUser.addresses, addressContent]
    };

    if (
      this.state.addressName === "" ||
      this.state.address === "" ||
      this.state.city === "" ||
      this.state.country === "" ||
      this.state.zipCode === "" ||
      this.state.tel === ""
    ) {
      alert("Please fill the all fields!!!");
    } else {
      this.props.addUserAddress(this.props.currentUser.id, useradd);
    }
  };

  componentDidMount() {
    this.props.resetAddressAdd();
  }

  render() {
    return (
      <div className="billing-details">
        <div className="form-group">
          <input
            className="input"
            type="text"
            name="addressName"
            placeholder="Address Name"
            onChange={this.onChange}
          />
        </div>
        <div className="form-group">
          <input
            className="input"
            type="text"
            name="address"
            placeholder="Address"
            onChange={this.onChange}
          />
        </div>
        <div className="form-group">
          <input
            className="input"
            type="text"
            name="city"
            placeholder="City"
            onChange={this.onChange}
          />
        </div>
        <div className="form-group">
          <input
            className="input"
            type="text"
            name="country"
            placeholder="Country"
            onChange={this.onChange}
          />
        </div>
        <div className="form-group">
          <input
            className="input"
            type="text"
            name="zipCode"
            placeholder="ZIP Code"
            onChange={this.onChange}
          />
        </div>
        <div className="form-group">
          <input
            className="input"
            type="tel"
            name="tel"
            placeholder="Telephone"
            onChange={this.onChange}
          />
        </div>
        <button
          className="btn btn-lg btn-danger"
          type="button"
          onClick={this.submitAddress}
        >
          Save
        </button>
        {this.props.addAddressProgress === 0 ? (
          <div style={{ marginTop: 20, backgroundColor: "pink", height: 40 }}>
            <h5 className="alert-heading">
              Adding address in progress, please wait..
            </h5>
          </div>
        ) : this.props.addAddressProgress === 1 ? (
          <div
            style={{
              marginTop: 20,
              backgroundColor: "#00cc00",
              height: 40
            }}
          >
            <h5 className="alert-heading">Address added succesfully...</h5>
          </div>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.user.currentUser,
    addAddressProgress: state.user.addAddressProgress,
    userAddresses: state.user.currentUser.addressess
  };
};

const mapDispatchToProps = {
  addUserAddress,
  resetAddressAdd,
  postUserUpdate
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddAdress);
