import React, {Component} from "react";
import ReactDOM from "react-dom";

import App from "./App";

ReactDOM.render(
    <App />
    , document.getElementById("start")
);



/*
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import createLogger from "redux-logger";

import App from "./App";

import reducers from './reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers,
    composeEnhancers(
        applyMiddleware(
            createLogger()
        )
    )
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById("start")
);

 */

