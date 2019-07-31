import React, { Component } from "react";
import { connect } from "react-redux";
import { MDBContainer, MDBBtn, MDBInput, MDBAlert } from "mdbreact";

import {
  forgotPassword,
  initializeResetPassword
} from "../../redux/user/actions";

class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ""
    };
    this.onChange = this.onChange.bind(this);
  }
  componentDidMount() {
    this.props.initializeResetPassword(5);
  }
  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onClick = () => {
    if (this.state.email === "") {
      this.props.initializeResetPassword(9999);
      alert("Please fill the all fields!!!");
    } else {
      let body = {
        senderEmail: this.state.email,
        mailContent: "",
        senderName: ""
      };
      this.props.forgotPassword(body);
    }
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row" style={{ padding: 20 }}>
          <div className="col-md-4" />

          <div className="col-md-4">
            <h1>Reset Password</h1>

            <div className="form-group">
              <label for="cPassword">Enter your email</label>
              <input
                type="email"
                id="cPassword"
                class="form-control"
                placeholder="Enter your account email."
                required
                name="email"
                onChange={this.onChange}
              />
            </div>
            <br />
            <button
              className="btn btn-danger btn-lg btn-block"
              onClick={this.onClick}
            >
              Reset Password
            </button>
          </div>
          <div className="col-md-4" />
        </div>
        {/* UI MESSAGES */}
        {this.props.user.resetPasswordProgress === 0 ? (
          <MDBContainer>
            <MDBAlert color="success">
              <h5 className="alert-heading">please wait..</h5>
            </MDBAlert>
          </MDBContainer>
        ) : this.props.user.resetPasswordProgress === 1 ? (
          <MDBContainer>
            <MDBAlert color="success">
              <h5 className="alert-heading">
                Yeni şifreniz {this.state.email} adresine gönderilmiştir.
              </h5>
            </MDBAlert>
          </MDBContainer>
        ) : this.props.user.resetPasswordProgress === -1 ? (
          <MDBContainer>
            <MDBAlert color="danger">
              <h5 className="alert-heading">Incorrect Email</h5>
            </MDBAlert>
          </MDBContainer>
        ) : null}
      </div>
    );
  }
}

const mapDispatchToProps = {
  forgotPassword,
  initializeResetPassword
};

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ForgotPassword);
