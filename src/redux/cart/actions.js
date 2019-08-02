/* Action Types */

const ADD_TOCART = "ADD_TOCART";
const DELETE_FROMCART = "DELETE_FROMCART";
const DECREASE_FROMCART = "DECREASE_FROMCART";

export const actionTypes = {
  ADD_TOCART,
  DELETE_FROMCART,
  DECREASE_FROMCART
};

/* Action Creators */

export const actionCreators = {
  addtoCART,
  deletefromCART,
  decreasefromCART
};

function addtoCART(data) {
  return {
    type: ADD_TOCART,
    payload: data
  };
}

function deletefromCART(data) {
  return {
    type: DELETE_FROMCART,
    payload: data
  };
}
function decreasefromCART(data) {
  return {
    type: DECREASE_FROMCART,
    payload: data
  };
}
