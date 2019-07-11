import {actionTypes} from './actions'

const initialState = {
    currentUser:{},
    successfulRegister: false
}

function userReducer(state=initialState, action) {
    switch(action.type){
        case actionTypes.REGISTER_USER:
            console.log("action");
            console.log(action)
            return{...state,
                successfulRegister : action.payload.status === 200 ? true : false
            };
        case actionTypes.LOGIN_USER:
            return{
                currentUser: action.payload
            };      
        default:
            return state;
    }
}

export default userReducer;