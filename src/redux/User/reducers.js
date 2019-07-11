import {actionTypes} from './actions'


const initialState = {
    currentUser:null,
}


function userReducer(state=initialState, action) {
    switch(action.type){
        case actionTypes.LOGOUT_USER:
            return [
                ...state,
                {currentUser: null}
            ]
        
        case actionTypes.UPDATE_USER:    
        case actionTypes.LOGIN_USER:
            return [
                ...state,
                {currentUser: action.payload}
            ];      
        default:
            return state;    
    }

}

export default userReducer;