import React, { Component } from "react";
import "./index.css";

//Redux
import { connect } from 'react-redux';
import { postUserLogin, postUserRegister } from '../../redux/user/actions'

class UserLogin extends Component {

  state = {
    firstName: "",
    lastName: "",
    email: "",
    emailRegister: "",
    Password: "",
    Password1: "",
    Password2: ""
  }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({ [name]: value })
    //  if(name==='Password2'){
    //      this.passwordControl(event)
    //  }

  }

  userLoggedin = (event) =>{
    this.props.postUserLogin({
      email: this.state.email,
      password: this.state.Password,
    })

    console.log(this.state.email)
    console.log(this.state.Password)
  }

  userSignedup = (event) =>{
    if(this.state.Password1 === this.state.Password2) {
      this.props.postUserRegister({
        email: this.state.emailRegister,
        password: this.state.Password1,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        role:"User"
      });
    } else {
      alert("Passwords are not equal");
    }
    console.log(this.state.firstName)
    console.log(this.state.lastName)
    console.log(this.state.emailRegister)
    console.log(this.state.Password1)
    console.log(this.state.Password2)

    event.preventDefault();
  }

  /*        
  passwordControl=(event) => {
      var pass = event.target.value;
      var control = false;
      this.state.Password1.value === this.state.Password2.value
      ? control=true
      : control=false
      
      if (test && control) {
         alert('pass');
         this.setState({value: pass});
      }
      else{
        alert('fail');
      }        
  }
  */

  render() {
    // console.log(this.state.email)
    // console.log(this.state.Password)
    // console.log(this.state.nameSurname)
    // console.log(this.state.emailRegister)
    // console.log(this.state.Password1)
    // console.log(this.state.Password2)
    return (
      <div>
        <div className="modal fade" id="modalLRForm" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
          <div className="modal-dialog cascading-modal" role="document">

            <div className="modal-content">

              <div className="modal-c-tabs">

                <ul className="nav nav-tabs md-tabs tabs-2 light-blue darken-3" role="tablist">
                  <li className="nav-item">

                    <a className="nav-link active" data-toggle="tab" href="#panel7" role="tab"><i className="fa fa-user mr-1" aria-hidden="true"></i>
                      Login</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" data-toggle="tab" href="#panel8" role="tab"><i className="fa fa-user-plus mr-1"></i>
                      Register</a>
                  </li>
                </ul>

                <div className="tab-content">

                  <div className="tab-pane fade in active" id="panel7" role="tabpanel">

                    <div className="modal-body mb-1">
                      <div className="md-form form-sm">
                        <i className="fa fa-envelope"></i>
                        <input name='email' value={this.state.email} onChange={this.handleChange} type="email" id="modalLRInput10" className="form-control form-control-sm validate" />
                        <label data-error="wrong" data-success="right" htmlFor="modalLRInput10">Your email</label>
                      </div>

                      <div className="md-form form-sm mb-4">
                        <i className="fa fa-lock prefix"></i>
                        <input name='Password' value={this.state.Password} onChange={this.handleChange} type="password" id="modalLRInput11" className="form-control form-control-sm validate" />
                        <label data-error="wrong" data-success="right" htmlFor="modalLRInput11">Your password</label>
                      </div>
                      <div className="text-center mt-2">
                        <button className="btn btn-danger" onClick={this.userLoggedin}>Log in <i className="fa fa-sign-in ml-1"></i></button>
                      </div>
                    </div>

                    <div className="modal-footer">
                      <div className="options text-center text-md-right mt-1">
                        <p>Not a member? <a data-toggle="tab" href="#panel8" className="blue-text">Sign Up</a></p>
                      </div>
                      <button type="button" className="btn btn-danger waves-effect ml-auto" data-dismiss="modal">Close</button>
                    </div>

                  </div>

                  <div className="tab-pane fade" id="panel8" role="tabpanel">

                    <div className="modal-body">
                      <div className="md-form form-sm mb-5">
                        <i className="fa fa-user mr-1"></i>
                        <input name='firstName' value={this.state.firstName} onChange={this.handleChange} type="text" id="modalLRInput15" className="form-control form-control-sm validate" />
                        <label data-error="wrong" data-success="right" htmlFor="modalLRInput15">Firstname</label>
                      </div>

                      <div className="md-form form-sm mb-5">
                        <i className="fa fa-user mr-1"></i>
                        <input name='lastName' value={this.state.lastName} onChange={this.handleChange} type="text" id="modalLRInput16" className="form-control form-control-sm validate" />
                        <label data-error="wrong" data-success="right" htmlFor="modalLRInput16">Lastname</label>
                      </div>
                
                      <div className="md-form form-sm mb-5">
                        <i className="fa fa-envelope prefix"></i>
                        <input name='emailRegister' value={this.state.emailRegister} onChange={this.handleChange} type="email" id="modalLRInput12" className="form-control form-control-sm validate" />
                        <label data-error="wrong" data-success="right" htmlFor="modalLRInput12">Your email</label>
                      </div>

                      <div className="md-form form-sm mb-5">
                        <i className="fa fa-lock prefix"></i>
                        <input name='Password1' value={this.state.Password1} onChange={this.handleChange} type="password" id="modalLRInput13" className="form-control form-control-sm validate" />
                        <label data-error="wrong" data-success="right" htmlFor="modalLRInput13">Your password</label>
                      </div>

                      <div className="md-form form-sm mb-4">
                        <i className="fa fa-lock prefix"></i>
                        <input name='Password2' value={this.state.Password2} onChange={this.handleChange} type="password" id="modalLRInput14" className="form-control form-control-sm validate" />
                        <label data-error="wrong" data-success="right" htmlFor="modalLRInput14">Repeat password</label>
                      </div>

                      <div className="text-center form-sm mt-2">
                        <button className="btn btn-danger" onClick={this.userSignedup}>Sign up <i className="fa fa-sign-in ml-1"></i></button>
                      </div>

                    </div>

                    <div className="modal-footer">
                      <div className="options text-right">
                        <p className="pt-1">Already have an account? <a data-toggle="tab" href="#panel7" className="blue-text">Log In</a></p>
                      </div>
                      <button type="button" className="btn btn-danger waves-effect ml-auto" data-dismiss="modal">Close</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="dropdown">
          <a href="" className="btn btn-default btn-rounded my-6" data-toggle="modal" data-target="#modalLRForm">
            <i className="fa fa-user"></i>
            <span>Sign in</span>
          </a>
        </div>

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = {
  postUserLogin,
  postUserRegister
}

export default connect(mapStateToProps,mapDispatchToProps)(UserLogin);
