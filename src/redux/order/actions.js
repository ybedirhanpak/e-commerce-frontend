import { API } from "../../api-config";
import {PostWithUrlBody} from "../../services/url-helper"
import { postUserUpdate } from '../user/actions';

const SELECT_SHIPPING_ADDRESS = "SELECT_SHIPPING_ADDRESS";
const SELECT_BILLING_ADDRESS = "SELECT_BILLING_ADDRESS";
const ORDER_CHECKOUT = "ORDER_CHECKOUT"

export const actionTypes = {
    SELECT_SHIPPING_ADDRESS,
    SELECT_BILLING_ADDRESS,
    ORDER_CHECKOUT
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

function orderCheckout(orders) {
    return{
        type: ORDER_CHECKOUT,
        payload: orders
    }
}

export const actionCreators = {
    selectShippingAddress,
    selectBillingAddress,
    orderCheckout
}

export const postOrderCheckout = body => {
    console.log("body", body);

    return dispatch => {
      //dispatch(initializeRegister());
      PostWithUrlBody(API + "/orders/create", body)
      
        .then(response => {
            console.log("response", response)
            if(response.status === 201 || response.status === 200) {
                response.json().then(data => {
                    console.log("successful", data)
                    const userUpdated = {
                        orders:[data.id]
                    }
                    dispatch(postUserUpdate(data.userId,userUpdated)); 
                })              
            } else {
              response.json().then(data => {
                console.log(data.message)
                // TODO: dispatch a function and save error message to state
              });
            }
        })
        .catch(error => console.log("Error when fetch register\n", error));
    };
  };