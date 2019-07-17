import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';

//Redux
import { connect } from "react-redux";
import { postUserLogin, actionCreators } from "../../redux/user/actions";

//Route
import { Redirect } from 'react-router-dom';

class UserRegisterForm extends Component {

    state = {
        email: "",
        password: ""
    };

    componentDidMount() {
        this.props.resetLoginState();
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    onUserLoggedin = event => {
        if(this.state.email !== "" && this.state.password !== "") {
            this.props.postUserLogin({
                email: this.state.email,
                password: this.state.password
            });
        }else {
            alert("Please fill the areas");
        }

        event.preventDefault();
      };

    render() {
        if(this.props.user.loginStatus.loginInProgress === 0 && this.props.user.loginStatus.successfulLogin === 1) {
            this.props.resetLoginState();
            return(
                <Redirect to='/home'/>
            )
        } 
        return (
            <MDBContainer>
            <MDBRow>
                <MDBCol>
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
                    <MDBBtn color="danger" onClick={this.onUserLoggedin}>Login</MDBBtn>
                    </div>
                </form>
                </MDBCol>
            </MDBRow>
            {
                (this.props.user.loginStatus.loginInProgress === 1 && this.props.user.loginStatus.successfulLogin === -1) ?
                (
                    <div class="alert alert-primary" role="alert">
                        Login in progress, please wait...
                    </div>
                ) : (this.props.user.loginStatus.loginInProgress === 1 && this.props.user.loginStatus.successfulLogin === 0) ?
                (
                    <div class="alert alert-primary" role="alert">
                        {this.props.user.loginStatus.loginResponse}
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
    postUserLogin,
    resetLoginState: actionCreators.resetLogin
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(UserRegisterForm);
