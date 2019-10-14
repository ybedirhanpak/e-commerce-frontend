import { API } from "../../api-config";
import { PostWithUrlBody, GetWithUrl } from "../../services/url-helper";
import { postUserUpdate } from "../User/actions";
import { fetchUserByMultipleIds } from "../admin/actions";

const SELECT_SHIPPING_ADDRESS = "SELECT_SHIPPING_ADDRESS";
const SELECT_BILLING_ADDRESS = "SELECT_BILLING_ADDRESS";
const INITALIZE_LOAD = "INITALIZE_LOAD";
const COMPLETE_LOAD = "COMPLETE_LOAD";
const INITALIZE_ORDER = "INITALIZE_ORDER";
const COMPLETE_ORDER = "COMPLETE_ORDER";
const RESET_ORDER = "RESET_ORDER";

export const actionTypes = {
  SELECT_SHIPPING_ADDRESS,
  SELECT_BILLING_ADDRESS,
  INITALIZE_LOAD,
  COMPLETE_LOAD,
  INITALIZE_ORDER,
  COMPLETE_ORDER,
  RESET_ORDER
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

function initalizeOrder() {
  return {
    type: INITALIZE_ORDER
  };
}

function completeOrder() {
  return {
    type: COMPLETE_ORDER
  };
}

export const resetOrder = () => {
  return {
    type: RESET_ORDER
  };
};

export const actionCreators = {
  selectShippingAddress,
  selectBillingAddress,
  initializeLoad,
  completeLoad,
  initalizeOrder,
  completeOrder
};

export const postOrderCheckout = body => {
  return dispatch => {
    dispatch(initalizeOrder());
    PostWithUrlBody(API + "/orders/create", body)
      .then(response => {
        if (response.status >= 200 && response.status < 300) {
          response.json().then(data => {
            const userUpdated = {
              orders: [data.id]
            };
            dispatch(completeOrder());
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
        if (response.status >= 200 && response.status < 300) {
          response.json().then(data => {
            dispatch(completeLoad(data));
          });
        } else {
          console.log("response error", response);
        }
      })
      .catch(error => console.log("Error when fetch orders\n", error));
  };
};

export const fetchAllOrders = () => {
  return dispatch => {
    dispatch(initializeLoad());
    return GetWithUrl(API + "/orders/getAll")
      .then(response => {
        console.log("response", response);
        if (response.status >= 200 && response.status < 300) {
          response.json().then(data => {
            console.log("fetch all orders data", data);
            dispatch(completeLoad(data));
            console.log("data", data);
            if (data) {
              const userIds = data.map(order => {
                return order.userId;
              });
              console.log("userIds :", userIds);
              dispatch(fetchUserByMultipleIds({ userIds: userIds }));
            }
          });
        } else {
          console.log("response error", response);
        }
      })
      .catch(error => console.log("Error when fetchin' all orders", error));
  };
};
