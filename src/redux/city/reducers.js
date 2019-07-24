import { actionTypes } from "./actions";

const initailState = {
  cityList: []
};

function citiesReducer(state = initailState, action) {
  switch (action.type) {
    case actionTypes.SAVE_CITIES:
      return { ...state, cityList: action.payload };
    default:
      return state;
  }
}

export default citiesReducer;
