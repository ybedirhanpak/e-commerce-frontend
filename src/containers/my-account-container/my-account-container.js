import React, { Component } from 'react'

//Redux
import { connect } from "react-redux";

//Route
import { Redirect } from 'react-router-dom';

class MyAccountContainer extends Component {
    render() {
        if(this.props.user.currentUser) {
            return (
                <div>
                    <h1>My Account</h1>
                </div>
            )
        } else {
            return(
                <Redirect to='/login' />
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
  )(MyAccountContainer);
