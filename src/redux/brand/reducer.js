import { actionTypes } from "./actions";

const initialState = {
  brandList: []
};

function brandsReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SAVE_BRANDS:
      return { ...state, brandList: action.payload };
    default:
      return state;
  }
}

export default brandsReducer;
