import React, {Component} from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import createLogger from "redux-logger";

import App from "./App";
import reducers from './reducers'

const store = createStore(reducers,
  applyMiddleware(
    createLogger()
  )
);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById("start")
);

