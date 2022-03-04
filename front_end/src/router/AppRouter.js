import React from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import App from "../App";
import SignUp from "../components/SignUp";
import SignIn from "../components/SignIn";
import Header from "../components/Header";
import Timeline from "../components/Timeline";
<<<<<<< HEAD
import NewResponse from "../components/NewResponse";

=======
import FriendTimeline from "../components/FriendTimeline";
>>>>>>> 85c3b66b666aad3cebcbaeeef0d07c03894c775b

const AppRouter = () => (


  <div className="container">
    <BrowserRouter>
      <Header />
      <Switch>
        <Route component={App} path="/" exact />
        <Route component={SignIn} path="/signin" />
        <Route component={SignUp} path="/signup" />
<<<<<<< HEAD
        <Route component={Timeline} path="/timeline"/>
=======
        <Route component={Timeline} path="/timeline" />
        <Route component={FriendTimeline} path="/friend_timeline" />
>>>>>>> 85c3b66b666aad3cebcbaeeef0d07c03894c775b
      </Switch>
    </BrowserRouter>
  </div>
);

export default AppRouter;
