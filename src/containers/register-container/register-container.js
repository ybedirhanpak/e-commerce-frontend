import React, { Component } from 'react'

//Components
import UserRegisterForm from '../../components/user-register-form/user-register-form';

export default class RegisterContainer extends Component {
    render() {
        return (
            <div className="container-fluid" style={{padding:30}}>
                <UserRegisterForm/>
            </div>
        )
    }
}
