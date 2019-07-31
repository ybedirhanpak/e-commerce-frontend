import React, { Component } from "react";

//Redux
import { connect } from "react-redux";

//Route
import { Link } from "react-router-dom";
import { isNullOrUndefined } from "util";

class UserLoginRegisterDropdown extends Component {
  render() {
    if (isNullOrUndefined(this.props.user.currentUser)) {
      return (
        <div>
          <button
            href=""
            className="btn btn-default btn-rounded my-6 dropdown-toggle"
            data-toggle="dropdown"
          >
            <i className="fa fa-user" />
            <span>{" Login / Register"}</span>
          </button>
          <ul className="dropdown-menu dropdown-menu-large row">
            {/* Login */}
            <li>
              <Link to="/login">Login</Link>
            </li>

            <li className="divider" />

            {/* Register */}
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ul>
        </div>
      );
    } else if (this.props.user.currentUser.role === "User") {
      return (
        <div>
          <button
            href=""
            className="btn btn-default btn-rounded my-6 dropdown-toggle"
            data-toggle="dropdown"
          >
            <i className="fa fa-user" />
            <span>{` ${this.props.user.currentUser.firstName}`}</span>
          </button>
          <ul className="dropdown-menu dropdown-menu-large row">
            {/* My Account */}
            <li>
              <Link to="/account">My Account</Link>
            </li>

            <li className="divider" />

            {/* My Orders */}
            <li>
              <Link to="/account/orders">My Orders</Link>
            </li>

            <li className="divider" />

            {/* Logout */}
            <li>
              <Link to="/logout">Logout</Link>
            </li>
          </ul>
        </div>
      );
    } else {
      return (
        <div>
          <button
            href=""
            className="btn btn-default btn-rounded my-6 dropdown-toggle"
            data-toggle="dropdown"
            style={{ minWidth: 150 }}
          >
            <span style={{ float: "left" }}>
              <i className="fa fa-user" />{" "}
              {` ${this.props.user.currentUser.firstName}`}
            </span>
          </button>
          <ul className="dropdown-menu dropdown-menu-large row">
            {/* Add Category */}
            <li>
              <Link to="/add-category">Add Category</Link>
            </li>

            <li className="divider" />

            {/* Add Product */}
            <li>
              <Link to="/add-product">Add Product</Link>
            </li>

            <li className="divider" />

            {/* All Orders */}
            <li>
              <Link to="/all-orders">All Orders</Link>
            </li>

            <li className="divider" />

            {/* Logout */}
            <li>
              <Link to="/logout">Logout</Link>
            </li>
          </ul>
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserLoginRegisterDropdown);
