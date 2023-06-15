import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";

//redux state management
import { createStore } from "redux";
import courseReducer from "./reducers/courseReducer";

const store = createStore(courseReducer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
