import React from "react";
import { Link } from "react-router-dom";
import { navRoutes } from "./../routes";
import "./../styles.css";

const Header = () => {
  const linkComponents = navRoutes.map(({ pathname, linkname, state }, key) => (
    <li key={key}>
      <Link className="nav-item" to={{ pathname, state }} key={key}>
        {linkname}
      </Link>
    </li>
  ));
  return (
    <header>
      <nav>
        <ul className="nav-bar">{linkComponents}</ul>
      </nav>
    </header>
  );
};

export default Header;
