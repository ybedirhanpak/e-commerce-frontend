const SELECT_SHIPPING_ADDRESS = "SELECT_SHIPPING_ADDRESS";
const SELECT_BILLING_ADDRESS = "SELECT_BILLING_ADDRESS";

export const actionTypes = {
    SELECT_SHIPPING_ADDRESS,
    SELECT_BILLING_ADDRESS
}

function selectShippingAddress(address) {
    return{
        type: SELECT_SHIPPING_ADDRESS,
        payload: address
    }
}

function selectBillingAddress(address) {
    return{
        type: SELECT_BILLING_ADDRESS,
        payload: address
    }
}

export const actionCreators = {
    selectShippingAddress,
    selectBillingAddress
}