import {actionTypes} from './actions'

const initialState = {
    categories : []
}

function categoriesReducer(state=initialState, action) {
    switch(action.type){
        case actionTypes.SAVE_CATEGORIES:
            console.log("Action in categoriesReducer");
            console.log(action)
            console.log("Category fetch Successful");
            return{...state,
                categories : action.payload
            };
        default:
            return state;
    }
}

export default categoriesReducer;