import { actionTypes } from "./actions";

const initialState = {
  categories: []
};

function categoriesReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SAVE_CATEGORIES:
      return { ...state, categories: action.payload };
    default:
      return state;
  }
}

export default categoriesReducer;
