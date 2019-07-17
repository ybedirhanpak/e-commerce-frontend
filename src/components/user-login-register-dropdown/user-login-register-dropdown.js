import React, { Component } from 'react'

//Redux
import { connect } from "react-redux";

//Route
import { Link } from 'react-router-dom'

class UserLoginRegisterDropdown extends Component {
    render() {
      if(!this.props.user.currentUser){
        return (
          <li class="dropdown">
            <button
              href=""
              className="btn btn-default btn-rounded my-6 dropdown-toggle"
              data-toggle="dropdown"
            >
              <i className="fa fa-user" />
              <span>My Account</span>
            </button>
            <ul class="dropdown-menu">
              <li><Link to='/login'>Login</Link></li>
              <li class="divider"></li>
              <li><Link to='/register'>Register</Link></li>
            </ul>
          </li>
          )
      }else {
        return (
          <li class="dropdown">
            <button
              href=""
              className="btn btn-default btn-rounded my-6 dropdown-toggle"
              data-toggle="dropdown"
            >
              <i className="fa fa-user" />
              <span>{this.props.user.currentUser.firstName}</span>
            </button>
            <ul class="dropdown-menu">
              <li><Link to='/account'>My Account</Link></li>
              <li class="divider"></li>
              <li><Link to='/logout'>Logout</Link></li>
            </ul>
          </li>
          )
      }
    }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = {

};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserLoginRegisterDropdown);
