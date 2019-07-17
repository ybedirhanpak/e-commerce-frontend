import React, { Component } from 'react'

//Redux
import { connect } from "react-redux";
import { actionCreators } from '../../redux/user/actions';

//Route
import { Redirect } from 'react-router-dom';

class Logout extends Component {
    render() {
        if(this.props.user.currentUser) {
            this.props.logout();
            return(
                <Redirect to='/login'/>
            )
        } else {
            return(
                <Redirect to='/home'/>
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
    logout: actionCreators.logout
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Logout);