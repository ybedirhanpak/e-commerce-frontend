import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import {store} from "./redux/configureStore";

import { postUserRegister, postUserLogin } from './redux/user/actions';

// Log the initial state
console.log(store.getState())

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
const unsubscribe = store.subscribe(() => console.log(store.getState()))

// store.dispatch(postUserRegister({
//   username:"yabepa16",
//   password:"yahya123",
//   firstName:"Yahya",
//   lastName:"Pak",
//   role:"Admin"
// }));

store.dispatch(postUserLogin({
    username:"yabepa",
    password:"yahya1234"
}))

unsubscribe();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
