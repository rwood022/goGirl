import React from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import App from "../App";
import SignUp from "../components/SignUp";
import SignIn from "../components/SignIn";
import Header from "../components/Header";
// import Timeline from "../components/DashboardComponents/Timeline";
// import FriendTimeline from "../components/DashboardComponents/FriendTimeline";
// import Profile from "../components/DashboardComponents/Profile";
// import ProfileUpdate from "../components/DashboardComponents/ProfileUpdate";
import Dashboard from "../components/Dashboard";

const AppRouter = () => (
  <div className="container">
    <BrowserRouter>
      <Header />
      <Switch>
        <Route component={App} path="/" exact />
        <Route component={SignIn} path="/signin" />
        <Route component={SignUp} path="/signup" />
        <Route component={Dashboard} path="/dashboard" />
        {/* <Route component={Timeline} path="/timeline" /> */}
        {/* <Route component={FriendTimeline} path="/friend_timeline" />
        <Route component={Profile} path="/profile" />
        <Route component={ProfileUpdate} path="/profile/profile_update" /> */}
      </Switch>
    </BrowserRouter>
  </div>
);

export default AppRouter;