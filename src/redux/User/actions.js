import { API } from "../../api-config";
import { PostWithUrlBody } from "../../services/url-helper";

/* Action Types */

const RESET_REGISTER = 'RESET_REGISTER';
const INITIALIZE_REGISTER = 'INITIALIZE_REGISTER';
const COMPLETE_REGISTER = "COMPLETE_REGISTER";
const RESET_LOGIN = 'RESET_LOGIN';
const INITIALIZE_LOGIN = 'INITIALIZE_LOGIN';
const COMPLETE_LOGIN = "COMPLETE_LOGIN";
const LOGOUT = "LOGOUT";
export const actionTypes = {
  RESET_REGISTER,
  INITIALIZE_REGISTER,
  COMPLETE_REGISTER,
  RESET_LOGIN,
  INITIALIZE_LOGIN,
  COMPLETE_LOGIN,
  LOGOUT
};

/* Action Creators */

export const actionCreators = {
  resetRegister,
  initializeRegister,
  completeRegister,
  resetLogin,
  initializeLogin,
  completeLogin,
  logout
};

function resetRegister() {
  return{
    type: RESET_REGISTER
  }
}

function initializeRegister() {
  return{
    type: INITIALIZE_REGISTER
  }
}

function completeRegister(userConfig) {
  return {
    type: COMPLETE_REGISTER,
    payload: userConfig
  };
}

function resetLogin() {
  return{
    type: RESET_LOGIN
  }
}

function initializeLogin() {
  return {
    type: INITIALIZE_LOGIN
  };
}

function completeLogin(userConfig) {
  return {
    type: COMPLETE_LOGIN,
    payload: userConfig
  };
}

function logout() {
  return {
    type: LOGOUT
  };
}

/* Api Call Functions */

export const postUserRegister = body => {
  return dispatch => {
    dispatch(initializeRegister());
    PostWithUrlBody(API + "/users/register", body)
      .then(response => {
          if(response.status === 200) {
            dispatch(completeRegister(response));
          } else {
            response.json().then(data => {
              console.log(data.message)
              dispatch(completeRegister(data.message));
            });
          }
      })
      .catch(error => console.log("Error when fetch register\n", error));
  };
};

export const postUserLogin = body => {
  return dispatch => {
    dispatch(initializeLogin());
    PostWithUrlBody(API + "/users/authenticate", body)
      .then(response => {
        return response.json();
      })
      .then(responseJson => {
        dispatch(completeLogin(responseJson));
      })
      .catch(error => console.log("Error when fetch register\n", error));
  };
};
