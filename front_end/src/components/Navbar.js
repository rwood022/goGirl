import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <ul className="nav-bar">
      <li>
        <NavLink to="/timeline" className="nav-link">
          Profile
        </NavLink>
      </li>
      <li>
        <NavLink to="/logout" className="nav-link">
          Logout
        </NavLink>
      </li>
    </ul>
  );
};

export default Navbar;
