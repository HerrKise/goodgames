import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import { setupStore } from "./store";
import { BrowserRouter, HashRouter } from "react-router-dom";
import "../index.css";

const store = setupStore();

/* ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
); */

ReactDOM.createRoot(document.getElementById("root")).render(
    <HashRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </HashRouter>
);
