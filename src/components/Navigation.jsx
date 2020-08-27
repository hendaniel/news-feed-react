import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import News from "../containers/News";

const Navigation = () => {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/category/:id" component={News} />
        <Route exact path="/:filter" component={News} />
      </Switch>
    </Fragment>
  );
};

export default Navigation;
