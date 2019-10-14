import React, { Component } from "react";
import { MDBContainer, MDBBtn, MDBInput, MDBAlert } from 'mdbreact';

//Redux
import { connect } from "react-redux";
import { actionCreators, postUserRegister } from "../../redux/User/actions";

//Route
import { Redirect, Link } from 'react-router-dom';

class UserRegisterForm extends Component {

    state = {
        firstName: "",
        lastName: "",
        email: "",
        password1: "",
        password2: "",
        fillAreasError: false,
        passwordNotEqualError: false
    };

    componentDidMount() {
        this.props.resetRegisterState();
        this.setState({
            fillAreasError: false,
            passwordNotEqualError: false
        })
    }

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
            //alert("Passwords are not equal");
            this.setState({passwordNotEqualError:true})
            }
        } else {
            //alert("Please fill the areas.");
            this.setState({fillAreasError:true})
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
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12 col-md-3"></div>  
                    <div className="col-sm-12 col-md-6">
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
                        <MDBBtn 
                        color="danger" 
                        onClick={this.onUserRegister}
                        disabled={this.props.user.registerStatus.registerInProgress === 1 && 
                            this.props.user.registerStatus.successfulRegister === -1}
                        >
                            Register
                        </MDBBtn>
                        </div>
                    </form>
                    <h5 style={{marginTop:20}} className="text-center mb-4">Already have an account ?</h5>
                    <div style={{marginBottom:20}}>
                        <Link to='/login'>Login now!</Link>
                    </div>
                    </div> 
                    <div className="col-sm-12 col-md-3"></div>  
                </div>
                {/* UI MESSAGES */}
                {
                    (this.props.user.registerStatus.registerInProgress === 1 && 
                        this.props.user.registerStatus.successfulRegister === -1) ?
                    (
                        <MDBContainer>
                            <MDBAlert color="success">
                            <h5 className="alert-heading"> Register in progress, please wait...</h5>
                            </MDBAlert>
                        </MDBContainer>
                    ) : (this.props.user.registerStatus.registerInProgress === 1 && 
                        this.props.user.registerStatus.successfulRegister === 0) ?
                    (
                        <MDBContainer>
                            <MDBAlert color="danger">
                            <h5 className="alert-heading"> {this.props.user.registerStatus.registerResponse}</h5>
                            </MDBAlert>
                            </MDBContainer>
                    ) : (this.state.passwordNotEqualError) ?
                    (
                        <MDBContainer>
                            <MDBAlert color="danger">
                            <h5 className="alert-heading"> Passwords are not equal </h5>
                            </MDBAlert>
                            </MDBContainer>
                    ) : (this.state.fillAreasError) ?
                    (
                        <MDBContainer>
                            <MDBAlert color="danger">
                            <h5 className="alert-heading"> Please fill all areas </h5>
                            </MDBAlert>
                        </MDBContainer>
                    ) : 
                    (
                        null
                    )
                }
            </div>
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