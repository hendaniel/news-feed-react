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
          render={(props, category) => renderComponent(props, "politica")}
        />
        <Route
          path="/internacionales"
          render={(props, category) =>
            renderComponent(props, "internacionales")
          }
        />
        <Route
          path="/tecnologia"
          render={(props, category) => renderComponent(props, "tecnologia")}
        />
        <Route
          path="/espectaculos"
          render={(props, category) => renderComponent(props, "espectaculos")}
        />
        <Route
          path="/deportes"
          render={(props, category) => renderComponent(props, "deportes")}
        />
        <Route
          path="/diseño"
          render={(props, category) => renderComponent(props, "diseño")}
        />
      </Switch>
    </main>
  );
};

export default Navigation;
