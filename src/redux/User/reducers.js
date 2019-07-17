import { actionTypes } from "./actions";

const initialState = {
  currentUser: null,
  registerStatus: {
    registerInProgress: -1,
    successfulRegister: -1,
    registerResponse: {}
  },
  loginStatus: {
    loginInProgress: -1,
    successfulLogin: -1,
    loginResponse: {}
  }
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.RESET_REGISTER:
      return {
        ...state,
        registerStatus:{
          ...state.registerStatus,
          registerInProgress : -1,
          successfulRegister: -1
        }
      }
    case actionTypes.INITIALIZE_REGISTER:
      return {
        ...state,
        registerStatus:{
          ...state.registerStatus,
          registerInProgress : 1,
          successfulRegister: -1
        }
      }
    case actionTypes.COMPLETE_REGISTER:
      if (action.payload.status === 200) {
        return {
          ...state,
          registerStatus:{
            ...state.registerStatus,
            registerInProgress: 0,
            successfulRegister: 1,
            registerResponse: action.payload
          }
        };
      } else {
        return {
          ...state,
          registerStatus:{
            ...state.registerStatus,
            registerInProgress: 1,
            successfulRegister: 0,
            registerResponse: action.payload
          }
        };
      }
    case actionTypes.RESET_LOGIN:
      return {
        ...state,
        loginStatus:{
          ...state.loginStatus,
          loginInProgress : -1,
          successfulLogin: -1
        }
      }
    case actionTypes.INITIALIZE_LOGIN:
      return {
        ...state,
        loginStatus:{
          ...state.loginStatus,
          loginInProgress : 1,
          successfulLogin: -1
        }
      }
    case actionTypes.COMPLETE_LOGIN:
      if(action.payload.message === 'Email or password is incorrect') {
        return {
          ...state,
          loginStatus:{
            ...state.loginStatus,
            loginInProgress : 1,
            successfulLogin: 0,
            loginResponse: 'Email or password is incorrect'
          }
        }
      } else {
        return {
          ...state,
          currentUser: action.payload,
          loginStatus:{
            ...state.loginStatus,
            loginInProgress : 0,
            successfulLogin: 1
          }
        }
      }
    default:
      return state;
  }
}

export default userReducer;
