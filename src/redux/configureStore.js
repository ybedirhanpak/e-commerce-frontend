import { applyMiddleware, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import { combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import userReducer from "./user/reducers";

const eCommerceApp = combineReducers({
  user: userReducer
});

export const store = createStore(
  eCommerceApp,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);
