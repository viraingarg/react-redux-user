import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { HashRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import AddUser from "./components/AddUser";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path="/" exact component={App} />
      <Route path="/addUser" exact component={AddUser} />
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
