import { API } from "../../api-config";
import {
  GetWithUrl,
  PostWithUrlBody,
  PutWithUrlBody,
  DeleteWithUrl
} from "../../services/url-helper";

/* Action Types */

const SAVE_CATEGORIES = "SAVE_CATEGORIES";

export const actionTypes = {
  SAVE_CATEGORIES
};

/* Action Creators*/

export const actionCreators = {
  saveCategories
};

function saveCategories(categories) {
  return {
    type: SAVE_CATEGORIES,
    payload: categories
  };
}

/* Api Call Functions */

export const fetchAllCategories = () => {
  console.log("fetchAll");
  return dispatch => {
    GetWithUrl(API + "/categories/getAll")
      .then(response => {
        return response.json();
      })
      .then(responseJson => {
        dispatch(saveCategories(responseJson));
      })
      .catch(error => console.log("Error when fetch categories\n", error));
  };
};

export const addCategory = body => {
  return dispatch => {
    PostWithUrlBody(API + "/categories/create", body)
      .then()
      .then(dispatch(fetchAllCategories()))
      .catch();
  };
};

export const apiUpdateCategory = (id, body) => {
  return dispatch => {
    PutWithUrlBody(API + "/categories/update/" + id, body)
      .then(response => console.log(response))
      .then(dispatch(fetchAllCategories()))
      .catch(error => console.log("Error while updating the category"));
  };
};

export const apiDeleteCategory = id => {
  return dispatch => {
    DeleteWithUrl(API + "/categories/delete/" + id)
      .then(response => console.log(response))
      .then(dispatch(fetchAllCategories()))
      .catch(error => console.log("Error while deleting the category", error));
  };
};
