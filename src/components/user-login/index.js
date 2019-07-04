import React, { Component } from "react";
import "./index.css";

class UserLogin extends React.Component {

    state={
        nameSurname:null,
        email:null,
        emailRegister:null,
        Password:null,
        Password1:null,
        Password2:null
    }

handleChange = (event) => {
        const {name,value} = event.target
        this.setState({[name]:value})      
      //  if(name==='Password2'){
      //      this.passwordControl(event)
      //  }

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
    console.log(this.state.email)
    console.log(this.state.Password)
    console.log(this.state.nameSurname)
    console.log(this.state.emailRegister)
    console.log(this.state.Password1)
    console.log(this.state.Password2)
    return (
        <div>
        <div class="modal fade" id="modalLRForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
          <div class="modal-dialog cascading-modal" role="document">
            
            <div class="modal-content">
        
              <div class="modal-c-tabs">
        
                <ul class="nav nav-tabs md-tabs tabs-2 light-blue darken-3" role="tablist">
                  <li class="nav-item">

                    <a class="nav-link active" data-toggle="tab" href="#panel7" role="tab"><i class="fa fa-user mr-1" aria-hidden="true "></i>
                      Login</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#panel8" role="tab"><i class="fa fa-user-plus mr-1"></i>
                      Register</a>
                  </li>
                </ul>
        
                <div class="tab-content">
              
                  <div class="tab-pane fade in show active" id="panel7" role="tabpanel">
        
                    <div class="modal-body mb-1">
                      <div class="md-form form-sm mb-5">
                        <i class="fa fa-envelope"></i>
                        <input name='email' value={this.state.email} onChange = {this.handleChange} type="email" id="modalLRInput10" class="form-control form-control-sm validate"/>
                        <label data-error="wrong" data-success="right" for="modalLRInput10">Your email</label>
                      </div>
        
                      <div class="md-form form-sm mb-4">
                        <i class="fa fa-lock prefix"></i>
                        <input name='Password' value = {this.state.Password} onChange = {this.handleChange} type="password" id="modalLRInput11" class="form-control form-control-sm validate"/>
                        <label data-error="wrong" data-success="right" for="modalLRInput11">Your password</label>
                      </div>
                      <div class="text-center mt-2">
                        <button class="btn btn-info">Log in <i class="fa fa-sign-in ml-1"></i></button>
                      </div>
                    </div>
              
                    <div class="modal-footer">
                      <div class="options text-center text-md-right mt-1">
                        <p>Not a member? <a href="#" class="blue-text">Sign Up</a></p>
                        <p>Forgot <a href="#" class="blue-text">Password?</a></p>
                      </div>
                      <button type="button" class="btn btn-outline-info waves-effect ml-auto" data-dismiss="modal">Close</button>
                    </div>
        
                  </div>
                            
                  <div class="tab-pane fade" id="panel8" role="tabpanel">
        
                    <div class="modal-body">
                      <div class="md-form form-sm mb-5">
                        <i class="fa fa-user mr-1"></i>
                        <input name='nameSurname' value= {this.state.nameSurname} onChange = {this.handleChange} type="text" id="modalLRInput15" class="form-control form-control-sm validate"/>
                        <label data-error="wrong" data-success="right" for="modalLRInput15">Name-Surname</label>
                      </div>

                      <div class="md-form form-sm mb-5">
                        <i class="fa fa-envelope prefix"></i>
                        <input name='emailRegister' value= {this.state.emailRegister} onChange = {this.handleChange} type="email" id="modalLRInput12" class="form-control form-control-sm validate"/>
                        <label data-error="wrong" data-success="right" for="modalLRInput12">Your email</label>
                      </div>
                      
                      <div class="md-form form-sm mb-5">
                        <i class="fa fa-lock prefix"></i>
                        <input name='Password1' value={this.state.Password1} onChange = {this.handleChange}  type="password" id="modalLRInput13" class="form-control form-control-sm validate"/>
                        <label data-error="wrong" data-success="right" for="modalLRInput13">Your password</label>
                      </div>
        
                      <div class="md-form form-sm mb-4">
                        <i class="fa fa-lock prefix"></i>
                        <input name='Password2' value={this.state.Password2} onChange = {this.handleChange}  type="password" id="modalLRInput14" class="form-control form-control-sm validate"/>
                        <label data-error="wrong" data-success="right" for="modalLRInput14">Repeat password</label>
                      </div>
        
                      <div class="text-center form-sm mt-2">
                        <button class="btn btn-info">Sign up <i class="fa fa-sign-in ml-1"></i></button>
                      </div>
        
                    </div>
              
                    <div class="modal-footer">
                      <div class="options text-right">
                        <p class="pt-1">Already have an account? <a href="#" class="blue-text">Log In</a></p>
                      </div>
                      <button type="button" class="btn btn-outline-info waves-effect ml-auto" data-dismiss="modal">Close</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="dropdown">
          <a href="" class="btn btn-default btn-rounded my-6" data-toggle="modal" data-target="#modalLRForm">
          <i class="fa fa-user"></i>
            <span>Sign in</span>
          </a>
        </div>
        </div>
    );
  }
}

export default UserLogin;
