import React from "react";
import "./nav.css";

const Nav = () => {
  return (
    <div className="nav-container">
      <ul className="nav-items">
        <li className="logo">Find Country</li>

        {/* Search input and button */}
        <ul className="search-items">
          <li>
            <input type="search" name="" id="" />
          </li>
          <li>
            <button className="search-btn">Search</button>
          </li>
        </ul>
      </ul>
    </div>
  );
};

export default Nav;
