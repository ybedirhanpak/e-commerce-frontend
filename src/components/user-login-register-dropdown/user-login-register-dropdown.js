import React, { Component } from 'react'

//Redux
import { connect } from "react-redux";

//Route
import { Link } from 'react-router-dom'

class UserLoginRegisterDropdown extends Component {
    render() {
      if(!this.props.user.currentUser){
        return (
          <div>
              <button
                href=""
                className="btn btn-default btn-rounded my-6 dropdown-toggle"
                data-toggle="dropdown"
              >
                <i className="fa fa-user" />
                <span>Login / Register</span>
              </button>
              <ul className="dropdown-menu dropdown-menu-large row">
                    {/* Login */}
                    <li>
                      <Link to='/login'>Login</Link>
                    </li>

                    <li className="divider" />

                    {/* Register */}
                    <li>
                      <Link to='/register'>Register</Link>
                    </li>
              </ul>
            </div>
          )
      }else {
        return (
          <div>
            <button
              href=""
              className="btn btn-default btn-rounded my-6 dropdown-toggle"
              data-toggle="dropdown"
            >
              <i className="fa fa-user" />
              <span>{this.props.user.currentUser.firstName}</span>
            </button>
            <ul className="dropdown-menu dropdown-menu-large row">
                  {/* My Account */}
                  <li><Link to='/account'>My Account</Link></li>

                  <li className="divider" />
                  
                  {/* My Orders */}
                  <li><Link to='/account/orders'>My Orders</Link></li>

                  <li className="divider" />

                  {/* Logout */}
                  <li><Link to='/logout'>Logout</Link></li>
 
            </ul>
         </div>
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
