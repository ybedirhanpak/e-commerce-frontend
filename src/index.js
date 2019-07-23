//React
import React from "react";
import ReactDOM from "react-dom";

//App
import App from "./App";
import * as serviceWorker from "./serviceWorker";

//Style
import "./index.css";
import "./utils/style.css";

//Firebase
import * as firebase from 'firebase';
import { firebaseConfig } from './api-config';

//Redux
import { Provider } from "react-redux";
import configureStore from "./redux/configureStore";
import { PersistGate } from 'redux-persist/integration/react'

let { store, persistor } = configureStore();

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
