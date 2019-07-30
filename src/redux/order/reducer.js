import { actionTypes } from "./actions";

const initalState = {
  selectedShippingAddress: {},
  selectedBillingAddress: {},
  currentOrders: [],
  fetchInProgress: true,
  orderInProgress: -1
};

function addressReducer(state = initalState, action) {
  switch (action.type) {
    case actionTypes.SELECT_SHIPPING_ADDRESS:
      return {
        ...state,
        selectedShippingAddress: action.payload
      };

    case actionTypes.SELECT_BILLING_ADDRESS:
      return {
        ...state,
        selectedBillingAddress: action.payload
      };

    case actionTypes.INITALIZE_LOAD:
      return {
        ...state,
        fetchInProgress: true
      };

    case actionTypes.COMPLETE_LOAD:
      return {
        ...state,
        currentOrders: action.payload,
        fetchInProgress: false
      };

    case actionTypes.INITALIZE_ORDER:
      return {
        ...state,
        orderInProgress: 0
      };

    case actionTypes.COMPLETE_ORDER:
      return {
        ...state,
        orderInProgress: 1
      };

    case actionTypes.RESET_ORDER:
      return {
        ...state,
        orderInProgress: -1
      };

    default:
      return state;
  }
}

export default addressReducer;
