import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { calstore } from "./redux/calstore";
import PrevExplain from "./PrevExplain";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={calstore}>
    <App />
  </Provider>
);
