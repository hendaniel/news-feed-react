import React from "react";
import { NavLink } from "react-router-dom";
import { routes } from "./../routes";
import "./../styles.scss";
import SearchBar from "./SearchBar";

const Header = () => {
  const links = routes.map((route, key) => {
    return (
      <li key={key}>
        <NavLink
          className="nav-item"
          to={route.path}
          activeClassName="selected-nav"
        >
          {route.linkname}
        </NavLink>
      </li>
    );
  });

  return (
    <header>
      <nav>
        <ul className="nav-bar">{links}</ul>
        <SearchBar />
      </nav>
    </header>
  );
};

export default Header;
