import { actionTypes } from "./actions";

const initialState = {
  categories: [],
  fetchInProgress: true
};

function categoriesReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SAVE_CATEGORIES:
      return { ...state, categories: action.payload, fetchInProgress: false };
    default:
      return state;
  }
}

export default categoriesReducer;
