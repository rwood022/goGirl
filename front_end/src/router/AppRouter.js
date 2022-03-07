import React from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import App from "../App";
import SignUp from "../components/SignUp";
import SignIn from "../components/SignIn";
import Header from "../components/Header";
import Timeline from "../components/DashboardComponents/Timeline";


import FriendTimeline from "../components/DashboardComponents/FriendTimeline";

const AppRouter = () => (


  <div className="container">
    <BrowserRouter>
      <Header />
      <Switch>
        <Route component={App} path="/" exact />
        <Route component={SignIn} path="/signin" />
        <Route component={SignUp} path="/signup" />
        <Route component={Timeline} path="/timeline"/>
        <Route component={Timeline} path="/timeline" />
        <Route component={FriendTimeline} path="/Dashboard/friend_timeline" />
  
      </Switch>
    </BrowserRouter>
  </div>
);

export default AppRouter;
