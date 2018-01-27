import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./home/containers/Home";
import NotFound from "./containers/NotFound";
import AppliedRoute from "./components/AppliedRoute";
import Signup from "./user/containers/Signup";
import Login from "./user/containers/Login";
import NewUniversity from "./home/containers/NewUniversity";


export default ({ childProps }) =>
  <Switch>
    <AppliedRoute exact path="/" component={Home} props={childProps} />
    <AppliedRoute path="/login" exact component={Login} props={childProps} />
    <AppliedRoute path="/signup" exact component={Signup} props={childProps} />
    <AppliedRoute path="/university/new" exact component={NewUniversity} props={childProps} />
    { /* Finally, catch all unmatched routes */ }
    <Route component={NotFound} />
  </Switch>;
