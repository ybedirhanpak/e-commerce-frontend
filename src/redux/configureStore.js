import { applyMiddleware, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import { combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

//Persistance
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

//Reducers
import userReducer from "./user/reducers";
import categoryReducer from "./category/reducers";
import productReducer from "./product/reducers";
import cartReducer from "./cart/reducers";
import cityReducer from "./city/reducers";
import brandReducer from "./brand/reducer";
import addressReducer from "./order/reducer";

//Combine reducers
const rootReducer = combineReducers({
  user: userReducer,
  product: productReducer,
  category: categoryReducer,
  cart: cartReducer,
  city: cityReducer,
  brand: brandReducer,
  order: addressReducer
});

const persistConfig = {
  key: "root",
  storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
  let store = createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
  let persistor = persistStore(store);
  return { store, persistor };
};
