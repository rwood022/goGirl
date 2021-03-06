import React from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import App from "../App";
import SignUp from "../components/SignUp";
import SignIn from "../components/SignIn";
import Header from "../components/Header";
import Dashboard from "../components/Dashboard";
import ProfileUpdate from '../components/DashboardComponents/ProfileUpdate'

const AppRouter = () => (
  <div className="container">
    <BrowserRouter>
      <Header />
      <Switch>
        <Route component={App} path="/" exact />
        <Route component={SignIn} path="/signin" />
        <Route component={SignUp} path="/signup" />
        <Route component={Dashboard} path="/dashboard" />
        <Route component={ProfileUpdate} path="/profileupdate" />
   
      </Switch>
    </BrowserRouter>
  </div>
);

export default AppRouter;
