import React from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import App from "../App";
import SignUp from "../components/SignUp";
import SignIn from "../components/SignIn";

const AppRouter = () => (
  <div className="container">
    <BrowserRouter>
      <Switch>
        <Route component={App} path="/" exact />
        <Route component={SignIn} path="/signin" />
        <Route component={SignUp} path="/signup" />
      </Switch>
    </BrowserRouter>
  </div>
);

export default AppRouter;
