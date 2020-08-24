import React from "react";
import { navRoutes } from "./../routes";
import { Switch, Route } from "react-router-dom";

const Navigation = () => {
  const routeComponents = navRoutes.map(({ pathname, component }, key) => (
    <Route exact path={pathname} component={component} key={key} />
  ));
  return (
    <main className="main">
      <Switch>{routeComponents}</Switch>
    </main>
  );
};

export default Navigation;
