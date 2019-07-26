import React, { Component } from 'react'

//Route
import { Route, Redirect} from 'react-router-dom'

//Redux
import { connect } from 'react-redux'
import { isNullOrUndefined } from 'util';

class PrivateRoute extends Component {
    render() {
        const { component, ...rest }  = this.props;
        return (
            <Route {...rest} render={props => (
                !isNullOrUndefined(this.props.currentUser) && this.props.currentUser.role === 'Admin' 
                ? React.createElement(component, {...props}) 
                : <Redirect to='/'/>
            )} />
        )
    }
}

const mapStateToProps = state => {
    return {
        currentUser: state.user.currentUser
    }
}

export default connect(mapStateToProps)(PrivateRoute);
