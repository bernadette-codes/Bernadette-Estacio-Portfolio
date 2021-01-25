import React from "react";
import { NavLink } from "react-router-dom";
import "./styles.scss";

const Nav = ({ linkPage1, linkPage2, linkPage3 }) => (
  <nav>
    <ul>
      <li>
        <NavLink to={"/" + linkPage1.toLowerCase()}>{linkPage1}</NavLink>
      </li>
      <li>
        <NavLink to={"/" + linkPage2.toLowerCase()}>{linkPage2}</NavLink>
      </li>
      <li>
        <NavLink to={"/" + linkPage3.toLowerCase()}>{linkPage3}</NavLink>
      </li>
    </ul>
  </nav>
);

export default Nav;
