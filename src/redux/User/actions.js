
// ACTION TYPES
const ADD_USER = 'ADD_USER';
const LOGIN_USER = 'LOGIN_USER';
const UPDATE_USER  = 'UPDATE_USER';
const LOGOUT_USER = 'LOGOUT_USER';

export const actionTypes = {
    ADD_USER,
    LOGIN_USER,
    UPDATE_USER,
    LOGOUT_USER
}

//ACTION CREATORS

function addUser(userConfig){
    return {
        type:ADD_USER,
        payload:userConfig
    }
}

function userLogin(userConfig){
    return {
        type:LOGIN_USER,
        payload:userConfig
    }
}

function updateUser(userConfig){
    return {
        type:UPDATE_USER,
        payload:userConfig
    }
}

function userLogout(){
    return {
        type:LOGOUT_USER
    }
}

export const actionCreators = {
    addUser,
    userLogin,
    updateUser,
    userLogout
}

//API calls

