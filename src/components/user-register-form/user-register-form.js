import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';

//Redux
import { connect } from "react-redux";
import { actionCreators, postUserRegister } from "../../redux/user/actions";

//Route
import { Redirect } from 'react-router-dom';

class UserRegisterForm extends Component {

    state = {
        firstName: "",
        lastName: "",
        email: "",
        password1: "",
        password2: ""
    };

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    onUserRegister = event => {
        if(this.state.email !== "" && this.state.firstName !== "" & this.state.lastName !== ""
        & this.state.password1 !== "" & this.state.password2 !== "") {
            if (this.state.password1 === this.state.password2) {
            this.props.postUserRegister({
                email: this.state.email,
                password: this.state.password1,
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                role: "User"
            });
            } else {
            alert("Passwords are not equal");
            }
        } else {
            alert("Please fill the areas.");
        }

        event.preventDefault();
    };

    render() {
        if(this.props.user.registerStatus.registerInProgress === 0 && this.props.user.registerStatus.successfulRegister === 1) {
            this.props.resetRegisterState();
            return(
                <Redirect to='/login'/>
            )
        } 
        return (
            <MDBContainer>       
            <MDBRow>
                <MDBCol>
                <h2 className="text-center mb-4">Sign up</h2>
                <form>
                    <div className="grey-text">
                    <MDBInput
                        name="firstName"
                        label="First name"
                        icon="user"
                        group
                        type="text"
                        validate
                        error="wrong"
                        success="right"
                        onChange={this.handleChange}
                    />
                    <MDBInput
                        name="lastName"
                        label="Last name"
                        icon="user"
                        group
                        type="text"
                        validate
                        error="wrong"
                        success="right"
                        onChange={this.handleChange}
                    />
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
                        name="password1"
                        label="Your password"
                        icon="lock"
                        group
                        type="password"
                        validate
                        onChange={this.handleChange}
                    />
                    <MDBInput
                        name="password2"
                        label="Confirm your password"
                        icon="exclamation-triangle"
                        group
                        type="password"
                        validate
                        error="wrong"
                        success="right"
                        onChange={this.handleChange}
                    />
                    </div>
                    <div className="text-center">
                    <MDBBtn color="danger" onClick={this.onUserRegister}>Register</MDBBtn>
                    </div>
                </form>
                </MDBCol>
            </MDBRow>
            {
                (this.props.user.registerStatus.registerInProgress === 1 && this.props.user.registerStatus.successfulRegister === -1) ?
                (
                    <div class="alert alert-primary" role="alert">
                        Register in progress, please wait...
                    </div>
                ) : (this.props.user.registerStatus.registerInProgress === 1 && this.props.user.registerStatus.successfulRegister === 0) ?
                (
                    <div class="alert alert-primary" role="alert">
                        {this.props.user.registerStatus.registerResponse}
                    </div>
                ) : 
                (
                    null
                )
            }
            </MDBContainer>
        );
    }
};

const mapStateToProps = state => {
    return {
      user: state.user
    };
  };
  
  const mapDispatchToProps = {
    postUserRegister,
    resetRegisterState: actionCreators.resetRegister
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(UserRegisterForm);