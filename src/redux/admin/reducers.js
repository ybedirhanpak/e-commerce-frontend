import { actionTypes } from "./actions";

const initalState = {
  userDetails: []
};

function adminPanelReducer(state = initalState, action) {
  switch (action.type) {
    case actionTypes.USER_INFO:
      return {
        ...state,
        userDetails: action.payload
      };

    default:
      return state;
  }
}

export default adminPanelReducer;
