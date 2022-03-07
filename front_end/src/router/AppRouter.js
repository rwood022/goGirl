import React from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import App from "../App";
import SignUp from "../components/SignUp";
import SignIn from "../components/SignIn";
import Header from "../components/Header";
import Dashboard from "../components/Dashboard";
import Timeline from "../components/DashboardComponents/Timeline";
import ProfileUpdate from '../components/DashboardComponents/ProfileUpdate';
import Profile from "../components/DashboardComponents/Profile";

const AppRouter = () => (
  <div className="container">
    <BrowserRouter>
      <Header />
      <Switch>
        <Route component={App} path="/" exact />
        <Route component={SignIn} path="/signin" />
        <Route component={SignUp} path="/signup" />
        <Route component={Dashboard} path="/dashboard" />
        <Route component={Timeline} path="/timeline" />
        <Route component={ProfileUpdate} path="/profileupdate" />
        <Route component={Profile} path="/profile" />
   
      </Switch>
    </BrowserRouter>
  </div>
);

export default AppRouter;
