import React, { Component } from "react";
import "./login-container.css";
import { Redirect, Link, Route } from "react-router-dom";

//Components
import UserLoginForm from "../../components/user-login-form/user-login-form";

export default class LoginContainer extends Component {
  render() {
    return (
      <div className="container-fluid" style={{ padding: 30 }}>
        <UserLoginForm />
      </div>
    );
  }
}
