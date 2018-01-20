//reason for Applied Routes is so we're not limited to this <Routes childProps={childProps} />
//AppliedRoute allows us to pass in a component with childprops to a route

import React from "react";
import { Route } from "react-router-dom";

export default ({ component: C, props: cProps, ...rest }) =>
  <Route {...rest} render={props => <C {...props} {...cProps} />} />;
