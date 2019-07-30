import { API } from "../../api-config";
import { PostWithUrlBody, PutWithUrlBody } from "../../services/url-helper";

/* Action Types */

const RESET_REGISTER = "RESET_REGISTER";
const INITIALIZE_REGISTER = "INITIALIZE_REGISTER";
const COMPLETE_REGISTER = "COMPLETE_REGISTER";
const RESET_LOGIN = "RESET_LOGIN";
const INITIALIZE_LOGIN = "INITIALIZE_LOGIN";
const COMPLETE_LOGIN = "COMPLETE_LOGIN";
const LOGOUT = "LOGOUT";
const UPDATE_USER = "UPDATE_USER";
const INITALIZE_ADD_ADDRESS = "INITALIZE_ADD_ADDRESS";
const COMPLETE_ADD_ADDRESS = "COMPLETE_ADD_ADDRESS";
const RESET_ADD_ADDRESS = "RESET_ADD_ADDRESS";

export const actionTypes = {
  RESET_REGISTER,
  INITIALIZE_REGISTER,
  COMPLETE_REGISTER,
  RESET_LOGIN,
  INITIALIZE_LOGIN,
  COMPLETE_LOGIN,
  LOGOUT,
  UPDATE_USER,
  INITALIZE_ADD_ADDRESS,
  COMPLETE_ADD_ADDRESS,
  RESET_ADD_ADDRESS
};

/* Action Creators */

export const actionCreators = {
  resetRegister,
  initializeRegister,
  completeRegister,
  resetLogin,
  initializeLogin,
  completeLogin,
  logout,
  updateUser,
  initalizeAddAddress,
  completeAddAddress
};

function resetRegister() {
  return {
    type: RESET_REGISTER
  };
}

function initializeRegister() {
  return {
    type: INITIALIZE_REGISTER
  };
}

function completeRegister(userConfig) {
  return {
    type: COMPLETE_REGISTER,
    payload: userConfig
  };
}

function resetLogin() {
  return {
    type: RESET_LOGIN
  };
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

function updateUser(userConfig) {
  return {
    type: UPDATE_USER,
    payload: userConfig
  };
}

function initalizeAddAddress() {
  return {
    type: INITALIZE_ADD_ADDRESS
  };
}

function completeAddAddress() {
  return {
    type: COMPLETE_ADD_ADDRESS
  };
}

export const resetAddressAdd = () => {
  return {
    type: RESET_ADD_ADDRESS
  };
};

/* Api Call Functions */

export const postUserRegister = body => {
  return dispatch => {
    dispatch(initializeRegister());
    PostWithUrlBody(API + "/users/register", body)
      .then(response => {
        if (response.status === 200) {
          dispatch(completeRegister(response));
        } else {
          response.json().then(data => {
            console.log(data.message);
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

export const postUserUpdate = (id, body) => {
  console.log("post user update body", body);
  return dispatch => {
    PutWithUrlBody(API + "/users/update/" + id, body)
      .then(response => {
        if (response.status === 201 || response.status === 200) {
          response.json().then(data => {
            console.log("update user success", data);
            dispatch(updateUser(data));
          });
        } else {
          response.json().then(data => {
            console.log(data.message);
          });
        }
      })
      .catch(error => console.log("Error when adding address\n", error));
  };
};

export const addUserAddress = (id, body) => {
  console.log("add user address, body: ", body);
  return dispatch => {
    dispatch(initalizeAddAddress());
    PutWithUrlBody(API + "/users/update/" + id, body)
      .then(response => {
        console.log("response: ", response);
        if (response.status >= 200 && response.status < 300) {
          response.json().then(data => {
            console.log("add user address success", data);
            dispatch(updateUser(data));
            dispatch(completeAddAddress());
            console.log("updated user address succesfully");
          });
        } else {
          response.json().then(data => {
            console.log(data.message);
            alert(
              "There is a problem occured. Please check your internet connection and try again later!"
            );
          });
        }
      })
      .catch(error => console.log("Error when adding address\n", error));
  };
};
