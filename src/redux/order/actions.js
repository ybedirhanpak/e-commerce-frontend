import { API } from "../../api-config";
import { PostWithUrlBody } from "../../services/url-helper";
import { postUserUpdate } from "../user/actions";

const SELECT_SHIPPING_ADDRESS = "SELECT_SHIPPING_ADDRESS";
const SELECT_BILLING_ADDRESS = "SELECT_BILLING_ADDRESS";
const INITALIZE_LOAD = "INITALIZE_LOAD";
const COMPLETE_LOAD = "COMPLETE_LOAD";

export const actionTypes = {
  SELECT_SHIPPING_ADDRESS,
  SELECT_BILLING_ADDRESS,
  INITALIZE_LOAD,
  COMPLETE_LOAD
};

function selectShippingAddress(address) {
  return {
    type: SELECT_SHIPPING_ADDRESS,
    payload: address
  };
}

function selectBillingAddress(address) {
  return {
    type: SELECT_BILLING_ADDRESS,
    payload: address
  };
}

function initializeLoad() {
  return {
    type: INITALIZE_LOAD
  };
}

function completeLoad(orders) {
  return {
    type: COMPLETE_LOAD,
    payload: orders
  };
}

export const actionCreators = {
  selectShippingAddress,
  selectBillingAddress,
  initializeLoad,
  completeLoad
};

export const postOrderCheckout = body => {
  console.log("body", body);

  return dispatch => {
    PostWithUrlBody(API + "/orders/create", body)
      .then(response => {
        console.log("response", response);
        if (response.status === 201 || response.status === 200) {
          response.json().then(data => {
            console.log("successful", data);
            const userUpdated = {
              orders: [data.id]
            };
            dispatch(postUserUpdate(data.userId, userUpdated));
          });
        } else {
          response.json().then(data => {
            console.log(data.message);
            // TODO: dispatch a function and save error message to state
          });
        }
      })
      .catch(error => console.log("Error when fetch register\n", error));
  };
};

export const fetchOrders = body => {
  return dispatch => {
    dispatch(initializeLoad());
    PostWithUrlBody(API + "/orders/getByMultipleIds", body)
      .then(response => {
        console.log("response", response);
        if (response.status >= 200 && response.status < 300) {
          response.json().then(data => {
            console.log("data", data);
            dispatch(completeLoad(data));
          });
        } else {
          console.log("response error", response);
        }
      })
      .catch(error => console.log("Error when fetch orders\n", error));
  };
};
