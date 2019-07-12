import { API } from "../../api-config";
import { GetWithUrl } from "../../services/url-helper";

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
  return dispatch => {
    GetWithUrl(API + "/categories")
      .then(response => {
        return response.json();
      })
      .then(responseJson => {
        dispatch(saveCategories(responseJson));
      })
      .catch(error => console.log("Error when fetch categories\n", error));
  };
};
