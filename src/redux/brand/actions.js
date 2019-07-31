import { API } from "../../api-config";
import { GetWithUrl, PostWithUrlBody } from "../../services/url-helper";

/* Action Types */

const SAVE_BRANDS = "SAVE_BRANDS";
const SAVE_ONE_BRAND = "SAVE_ONE_BRAND";

export const actionTypes = {
  SAVE_BRANDS,
  SAVE_ONE_BRAND
};

/*Action Creators */

function saveBrands(brands) {
  return {
    type: SAVE_BRANDS,
    payload: brands
  };
}

function saveOneBrand(brand) {
  return {
    type: SAVE_ONE_BRAND,
    payload: brand
  };
}

export const actionCreators = {
  saveBrands
};

/* Api Call Functions */

export const fetchAllBrands = () => {
  return dispatch => {
    GetWithUrl(API + "/brands/getAll")
      .then(response => {
        return response.json();
      })
      .then(responseJson => {
        dispatch(saveBrands(responseJson));
      })
      .catch(error => console.log("Errow while fetching brands\n", error));
  };
};

export const addNewBrand = body => {
  return dispatch => {
    PostWithUrlBody(API + "/brands/create", body)
      .then(response => response.json())
      .then(responseJson => {
        dispatch(saveOneBrand(responseJson));
      })
      .catch(error => console.log("Error when adding new brand\n", error));
  };
};
