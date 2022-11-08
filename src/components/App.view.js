import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Examples from "seed/examples/components/Examples";
import Docs from "seed/examples/components/Docs";
import Romans from "components/Romans";
import Login from "components/auth/Login";
import css from "resources/css/App.module.css";

const AppView = () => (
  <div class={css.module}>
    <BrowserRouter>
      <Switch>
        <Route path="/romans" component={Romans} /> 
        <Route path="/login" component={Login} />
        <Redirect to="/login"/>
      </Switch>
    </BrowserRouter>
  </div>
);

AppView.propTypes = {};

export default AppView;
