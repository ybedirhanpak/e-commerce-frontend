import { applyMiddleware, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import { combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import userReducer from "./user/reducers";
import categoryReducer from './category/reducers';

const eCommerceApp = combineReducers({
  user: userReducer,
  category: categoryReducer
});

export const store = createStore(
  eCommerceApp,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);
