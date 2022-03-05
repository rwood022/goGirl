import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({handleButtonClick}) => {
  return (
    <ul className="nav-bar">
      <li>
        <NavLink to="/dashboard" className="nav-link" onClick={handleButtonClick}>
          View Profile
        </NavLink>
      </li>
      <li>
        <NavLink to="/timeline" className="nav-link">
          Post
        </NavLink>
      </li>
      <li>
        <NavLink to="/logout" className="nav-link emergency">
          EMERGENCY
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
