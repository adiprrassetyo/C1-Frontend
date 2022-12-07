import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Browter } from "react-router-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Browter>
      <Provider store={store}>
        <App />
      </Provider>
    </Browter>
  </React.StrictMode>
);
