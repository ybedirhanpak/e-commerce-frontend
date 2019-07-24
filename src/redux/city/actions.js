import { API } from "../../api-config";
import { GetWithUrl } from "../../services/url-helper";

/* Action Types */

const SAVE_CITIES = "SAVE_CITIES";

export const actionTypes = {
  SAVE_CITIES
};

/* Action Creators */

function saveCities(cities) {
  return {
    type: SAVE_CITIES,
    payload: cities
  };
}

export const actionCreators = {
  saveCities
};

/* Api Call Functions */

export const fetchAllCities = () => {
  return dispatch => {
    GetWithUrl(API + "/cities/getAll")
      .then(response => {
        return response.json();
      })
      .then(responseJson => {
        dispatch(saveCities(responseJson));
      })
      .catch(error => console.log("Errow while fetching cities\n", error));
  };
};
