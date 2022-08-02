import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { hot } from "react-hot-loader/root";

import "../assets/scss/main.scss";

import HomePage from "./HomePage";


const App = (props) => {


  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>

      </Switch>
    </Router>
  );
};

export default hot(App);
