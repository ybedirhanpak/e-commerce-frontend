import React, { Component } from "react";

import { connect } from "react-redux";

class ChangePassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cPassword: "",
      newPassword: "",
      newPassword2: "",
      isMatch: false
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onClick = () => {
    if (
      this.state.cPassword === "" ||
      this.state.newPassword === "" ||
      this.state.newPassword2 === ""
    ) {
      alert("Please fill the all fields!!!");
    } else if (this.state.newPassword === this.state.newPassword2) {
      this.setState({
        isMatch: true
      });
    } else {
      alert("New Password and New Password2 doesn't match!!");
    }
  };

  render() {
    return (
      <div>
        <h1>ChangePassword</h1>
        <div className="form-group">
          <label for="cPassword">Current Password</label>
          <input
            type="password"
            id="cPassword"
            class="form-control"
            placeholder="Enter your current password."
            required
            name="cPassword"
            onChange={this.onChange}
          />
        </div>
        <br />
        <div className="form-group">
          <label for="newPassword">New Password</label>
          <input
            type="password"
            id="newPassword"
            class="form-control"
            placeholder="Enter your new password."
            required
            name="newPassword"
            onChange={this.onChange}
          />
        </div>
        <br />
        <div className="form-group">
          <label for="newPassword2">New Password Again</label>
          <input
            type="password"
            id="newPassword2"
            class="form-control"
            placeholder="Enter your new password again"
            required
            name="newPassword2"
            onChange={this.onChange}
          />
        </div>
        <br />
        <button
          className="btn btn-danger btn-lg btn-block"
          onClick={this.onClick}
        >
          Change Password
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {};

export default connect(mapStateToProps)(ChangePassword);
