import React, { Component } from "react";
import { MDBContainer, MDBBtn, MDBInput, MDBAlert } from "mdbreact";

//Redux
import { connect } from "react-redux";
import { postUserLogin, actionCreators } from "../../redux/user/actions";

//Route
import { Redirect, Link } from "react-router-dom";

class UserLoginForm extends Component {
  state = {
    email: "",
    password: "",
    fillAreasError: false
  };

  componentDidMount() {
    this.props.resetLoginState();
    this.setState({
      fillAreasError: false
    });
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  onUserLoggedin = event => {
    if (this.state.email !== "" && this.state.password !== "") {
      this.props.postUserLogin({
        email: this.state.email,
        password: this.state.password
      });
    } else {
      //alert("Please fill the areas");
      this.setState({
        fillAreasError: true
      });
    }

    event.preventDefault();
  };

  render() {
    if (
      this.props.user.loginStatus.loginInProgress === 0 &&
      this.props.user.loginStatus.successfulLogin === 1
    ) {
      this.props.resetLoginState();
      return <Redirect to="/home" />;
    }
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 col-md-3" />
          <div className="col-sm-12 col-md-6">
            <h2 className="text-center mb-4">Login</h2>
            <form>
              <div className="grey-text">
                <MDBInput
                  name="email"
                  label="Your email"
                  icon="envelope"
                  group
                  type="email"
                  validate
                  error="wrong"
                  success="right"
                  onChange={this.handleChange}
                />
                <MDBInput
                  name="password"
                  label="Your password"
                  icon="lock"
                  group
                  type="password"
                  validate
                  onChange={this.handleChange}
                />
              </div>
              <div className="text-center">
                <MDBBtn
                  color="danger"
                  onClick={this.onUserLoggedin}
                  disabled={
                    this.props.user.loginStatus.loginInProgress === 1 &&
                    this.props.user.loginStatus.successfulLogin === -1
                  }
                >
                  Login
                </MDBBtn>
              </div>
            </form>
            <h5 style={{ marginTop: 20 }} className="text-center mb-4">
              Don't have an account yet ?
            </h5>
            <div style={{ marginBottom: 20 }}>
              <Link to="/register">Sign Up!</Link>
            </div>
          </div>
          <div className="col-sm-12 col-md-3" />
        </div>
        {/* UI MESSAGES */}
        {this.props.user.loginStatus.loginInProgress === 1 &&
        this.props.user.loginStatus.successfulLogin === -1 ? (
          <MDBContainer>
            <MDBAlert color="success">
              <h5 className="alert-heading">
                Login in progress, please wait..
              </h5>
            </MDBAlert>
          </MDBContainer>
        ) : this.props.user.loginStatus.loginInProgress === 1 &&
          this.props.user.loginStatus.successfulLogin === 0 ? (
          <MDBContainer>
            <MDBAlert color="danger">
              <h5 className="alert-heading">
                {this.props.user.loginStatus.loginResponse}
              </h5>
            </MDBAlert>
          </MDBContainer>
        ) : this.state.fillAreasError ? (
          <MDBContainer>
            <MDBAlert color="danger">
              <h5 className="alert-heading">Please fill all areas</h5>
            </MDBAlert>
          </MDBContainer>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = {
  postUserLogin,
  resetLoginState: actionCreators.resetLogin
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserLoginForm);
