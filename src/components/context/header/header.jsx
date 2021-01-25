import React from "react";
import Nav from "../nav/nav";
import "./styles.scss";

const Header = ({ pageTitle, linkPage1, linkPage2, linkPage3 }) => (
  <header className="pages">
    <h2>{pageTitle}</h2>

    <Nav linkPage1={linkPage1} linkPage2={linkPage2} linkPage3={linkPage3} />
  </header>
);

export default Header;
