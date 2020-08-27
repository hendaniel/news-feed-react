import React, { Fragment } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import News from "../containers/News";

const Navigation = () => {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/category/:id" component={News} />
        <Route exact path="/search/:word" component={News} />
        <Route exact path="/:filter" component={News} />
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
      </Switch>
    </Fragment>
  );
};

export default Navigation;
