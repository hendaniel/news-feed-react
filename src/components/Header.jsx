import React from "react";
import { Link } from "react-router-dom";
import { routes } from "./../routes";
import "./../styles.scss";

const Header = () => {
  const links = routes.map((route, key) => {
    return (
      <li key={key}>
        <Link className="nav-item" to={route.path}>
          {route.linkname}
        </Link>
      </li>
    );
  });

  return (
    <header>
      <nav>
        <ul className="nav-bar">{links}</ul>
      </nav>
    </header>
  );
};

export default Header;
