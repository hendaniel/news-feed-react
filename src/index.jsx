import React from "react";
import { render } from "react-dom";
import "./index.css";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import storeFactory from "./store";
import App from "./components/App";

const store = storeFactory();

render(
  <HashRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>,
  document.getElementById("root")
);
