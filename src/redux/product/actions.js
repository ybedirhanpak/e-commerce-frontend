import { API } from "../../api-config";
import "isomorphic-fetch";

import {
  GetWithUrl,
  PostWithUrlBody,
  DeleteWithUrl,
  PutWithUrlBody
} from "../../services/url-helper";

/* Action Types */

const SAVE_PRODUCT_LIST = "SAVE_PRODUCT_LIST";
const SAVE_SINGLE_PRODUCT = "SAVE_SINGLE_PRODUCT";

export const actionTypes = {
  SAVE_PRODUCT_LIST,
  SAVE_SINGLE_PRODUCT
};

/* Action Creators */

function saveProductList(productList) {
  return {
    type: SAVE_PRODUCT_LIST,
    payload: productList
  };
}

function saveSingleProduct(product) {
  return {
    type: SAVE_SINGLE_PRODUCT,
    payload: product
  };
}

export const actionCreators = {
  saveProductList,
  saveSingleProduct
};

/* Api Call Functions */

export const getProductList = () => {
  return dispatch => {
    GetWithUrl(API + "/products")
      .then(response => response.json())
      .then(response => {
        dispatch(saveProductList(response));
      })
      .catch(error => console.log("Error when fetching product list\n", error));
  };
};

export const addProduct = body => {
  return dispatch => {
    PostWithUrlBody(API + "/products", body)
      .then(response => response.json())
      //.then(dispatch(getProductList()))
      .catch(error => console.log("Error while adding a new product\n", error));
  };
};

export const deleteProduct = body => {
  return dispatch => {
    DeleteWithUrl(API + "/products/" + body)
      .then()
      .catch(error => console.log("Errow while deletin' a product\n", error));
  };
};

export const getProduct = id => {
  return dispatch => {
    GetWithUrl(API + "/products/" + id)
      .then(response => response.json())
      .then(response => {
        dispatch(saveSingleProduct(response));
      })
      //.then(saveSingleProduct(response))
      .catch(error =>
        console.log("Error while getting product details\n", error)
      );
  };
};

export const updateProduct = (id, body) => {
  return dispatch => {
    PutWithUrlBody(API + "/products/" + id, body)
      .then(response => response.json())
      .catch(error => console.log("Error while updating a product \n", error));
  };
};
