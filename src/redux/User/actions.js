import { API } from '../../api-config'
import { PostWithUrlBody } from '../../services/url-helper'

/* Action Types */

const REGISTER_USER = 'REGISTER_USER';
const LOGIN_USER = 'LOGIN_USER';
export const actionTypes = {
    REGISTER_USER,
    LOGIN_USER
}

/* Action Creators */

export const actionCreators = {
    userRegister,
    userLogin
}

function userRegister(userConfig){
    console.log("userRegister. userConfig:");
    console.log(userConfig);
    return {
        type:REGISTER_USER,
        payload:userConfig
    }
}

function userLogin(userConfig){
    return {
        type:LOGIN_USER,
        payload:userConfig
    }
}

/* Api Call Functions */

export const postUserRegister = (body) => {
    console.log("postUserRegister")
    return (dispatch) => {
        PostWithUrlBody(API+'/users/register',body)
        .then(response => {
            console.log(response);
            console.log("dispatch");
            dispatch(userRegister(response));
        })
        .catch(error => console.log('Error when fetch register\n', error));
    }
}

export const postUserLogin = (body) => {
    console.log("postUserLogin")
    return (dispatch) => {
        PostWithUrlBody(API+'/users/authenticate',body)
        .then(response => {
            console.log(response);
            return response.json()
        })
        .then(responseJson => {
            console.log(responseJson);
            console.log("dispatch userLogin");
            dispatch(userLogin(responseJson));
        })
        .catch(error => console.log('Error when fetch register\n', error));
    }
}

 
