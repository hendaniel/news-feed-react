import React from "react";
import NewsPage from "./NewsPage";
import { Switch, Route } from "react-router-dom";

const renderComponent = (props, category) => {
  return <NewsPage {...props} category={category} />;
};

const Navigation = () => {
  return (
    <main className="main">
      <Switch>
        <Route
          exact
          path="/"
          render={(props, category) => renderComponent(props, "home")}
        />
        <Route
          path="/politica"
          render={(props, category) => renderComponent(props, "home")}
        />
        <Route
          path="/internacionales"
          render={(props, category) => renderComponent(props, "home")}
        />
        <Route
          path="/tecnologia"
          render={(props, category) => renderComponent(props, "home")}
        />
        <Route
          path="/espectaculos"
          render={(props, category) => renderComponent(props, "home")}
        />
        <Route
          path="/deportes"
          render={(props, category) => renderComponent(props, "home")}
        />
        <Route
          path="/diseño"
          render={(props, category) => renderComponent(props, "home")}
        />
      </Switch>
    </main>
  );
};

export default Navigation;
