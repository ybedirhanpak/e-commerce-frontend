import { API } from "../../api-config";
import { GetWithUrl } from "../../services/url-helper";

/* Action Types */

const SAVE_BRANDS = "SAVE_BRANDS";

export const actionTypes = {
  SAVE_BRANDS
};

/*Action Creators */

function saveBrands(brands) {
  return {
    type: SAVE_BRANDS,
    payload: brands
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
