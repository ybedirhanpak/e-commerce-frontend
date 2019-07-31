import { API } from "../../api-config";
import { PostWithUrlBody, GetWithUrl } from "../../services/url-helper";

/* Action Types */

const USER_INFO = "USER_INFO";

export const actionTypes = {
  USER_INFO
};

/* Action Creators */

export const actionCreators = {
  fetchUserInfo
};

function fetchUserInfo(userDetails) {
  return {
    type: USER_INFO,
    payload: userDetails
  };
}

/* API Call Functions */

export const fetchUserByMultipleIds = body => {
  console.log("fetchuserbymultipleıds body", body);
  return dispatch => {
    PostWithUrlBody(API + "/users/getByMultipleIds/", body).then(response => {
      if (response.status >= 200 && response.status < 300) {
        response.json().then(data => {
          console.log("fetch user by id data", data);
          dispatch(fetchUserInfo(data));
        });
      }
    });
  };
};

export const fetchUserById = id => {
  return dispatch => {
    GetWithUrl(API + "/users/getById/" + id).then(response => {
      if (response.status >= 200 && response.status < 300) {
        response.json().then(data => {
          console.log("fetch user by id data", data);
          dispatch(fetchUserInfo(data));
        });
      }
    });
  };
};
