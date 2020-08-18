import React from "react";
import { Link } from "react-router-dom";
import "./../styles.css";

const Header = () => {
  return (
    <header>
      <nav>
        <ul className="nav-bar">
          <li>
            <Link className="nav-item" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="nav-item" to="/politica">
              Política
            </Link>
          </li>
          <li>
            <Link className="nav-item" to="/internacionales">
              Internacionales
            </Link>
          </li>
          <li>
            <Link className="nav-item" to="/tecnologia">
              Tecnología
            </Link>
          </li>
          <li>
            <Link className="nav-item" to="/espectaculos">
              Espectáculos
            </Link>
          </li>
          <li>
            <Link className="nav-item" to="/deportes">
              Deportes
            </Link>
          </li>
          <li>
            <Link className="nav-item" to="/diseño">
              Diseño
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
