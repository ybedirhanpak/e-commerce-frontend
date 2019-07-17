import { applyMiddleware, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import { combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import userReducer from "./user/reducers";
import categoryReducer from './category/reducers';
import productReducer from './product/reducers';
import cartReducer from './cart/reducers'

const eCommerceApp = combineReducers({
  user: userReducer,
  product: productReducer,
  category: categoryReducer,
  cart: cartReducer
});

export const store = createStore(
  eCommerceApp,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);
