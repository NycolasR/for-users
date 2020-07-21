import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Main from "./pages/Main";
import User from "./pages/User";
import Address from "./pages/Address";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/users/:id" component={User} />
      <Route exact path="/users/address/:id" component={Address} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
