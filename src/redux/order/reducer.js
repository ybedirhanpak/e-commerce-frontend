import {actionTypes} from './actions'

const initalState = {
    selectedShippingAddress:{},
    selectedBillingAddress:{}
}

function addressReducer (state = initalState, action) {
    switch (action.type) {
        case actionTypes.SELECT_SHIPPING_ADDRESS:
            return{
                ...state,
                selectedShippingAddress: action.payload
            }

        case actionTypes.SELECT_BILLING_ADDRESS:
            return{
                ...state,
                selectedBillingAddress: action.payload
            }
        default:
            return state;
    }
}

export default addressReducer