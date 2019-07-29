import React, { Component } from "react";

import { connect } from "react-redux";
import { postUserUpdate } from "../../redux/user/actions";

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
  onClick = () => {
    if (
      this.state.addressName === "" ||
      this.state.address === "" ||
      this.state.city === "" ||
      this.state.country === "" ||
      this.state.zipCode === "" ||
      this.state.tel === ""
    ) {
      alert("Please fill the all fields!!!");
    }
  };

  submitAddress = event => {
    const addressContent = {
      addressName: this.state.addressName,
      address: this.state.address,
      city: this.state.city,
      country: this.state.country,
      zipCode: this.state.zipCode,
      Telephone: this.state.tel
    };
    const useradd = {
      ...this.props.currentUser,
      addresses: [...this.props.currentUser.addresses, addressContent]
    };

    this.props.postUserUpdate(this.props.currentUser.id, useradd);
  };

  render() {
    return (
      <div className="billing-details">
        <div className="form-group">
          <input
            className="input"
            type="text"
            name="addressName"
            placeholder="ddressName"
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
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.user.currentUser
  };
};

const mapDispatchToProps = {
  postUserUpdate
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddAdress);
