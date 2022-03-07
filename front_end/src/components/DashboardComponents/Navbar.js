import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({handleButtonClick}) => {
  return (
    <div>
      <ul className="nav-bar">
        <li>
          <NavLink to="/dashboard" className="nav-link" onClick={handleButtonClick}>
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink to="/timeline" className="nav-link">
            Post
          </NavLink>
        </li>
        <li>
      
                <a className="white-text nav-link"
                  target="_blank"
                  href="https://www.waze.com/live-map?utm_source=waze_website&utm_campaign=waze_website&utm_medium=website_menu"
                > WAZE
                </a>
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
    </div>
  );
};

export default Navbar;
