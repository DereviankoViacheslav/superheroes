import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./TopBar.css";

const TopBar = () => {
  return (
    <nav className="navigation">
      <div className="container navigation__content">
        <Link to="/" className="link">
          Superheroes
        </Link>
        <ul className="navigation__links">
          <li className="navigation__link">
            <NavLink to="/" exact className="link">
              Home
            </NavLink>
          </li>
          <li className="navigation__link">
            <NavLink to="/create-hero" className="link">
              Create hero
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default TopBar;
