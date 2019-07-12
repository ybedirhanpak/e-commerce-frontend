import {actionTypes} from './actions';

const initialState = {
    productList:[]
}


function productReducer(state=initialState, action) {
    switch(action.type){
        case actionTypes.SAVE_PRODUCT_LIST:
            return {
                ...state,
                productList: action.payload
            }
        default:
            return state;    
    }
}

export default productReducer