import React, { Fragment } from "react";
import { navRoutes } from "./../routes";
import { Switch, Route } from "react-router-dom";

const Navigation = () => {
  const routeComponents = navRoutes.map(({ pathname, component }, key) => (
    <Route exact path={pathname} component={component} key={key} />
  ));
  return (
    <Fragment>
      <Switch>{routeComponents}</Switch>
    </Fragment>
  );
};

export default Navigation;
