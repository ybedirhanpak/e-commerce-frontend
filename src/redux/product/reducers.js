import { actionTypes } from "./actions";

const initialState = {
  productList: [],
  currentProduct: {},
  fetchInProgress: true,
};

function productReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SAVE_PRODUCT_LIST:
      return {
        ...state,
        productList: action.payload,
        fetchInProgress: false
      };
    case actionTypes.SAVE_SINGLE_PRODUCT:
      return {
        ...state,
        currentProduct: action.payload
      };
    default:
      return state;
  }
}

export default productReducer;
