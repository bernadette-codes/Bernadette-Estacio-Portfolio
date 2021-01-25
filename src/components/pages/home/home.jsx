import React from "react";
import OpeningEffect from "../../context/openingEffect/openingEffect";
import Nav from "../../context/nav/nav";
import "./styles.scss";

const Home = () => (
  <>
    <OpeningEffect />

    <main className="homePage">
      <div className="container">
        <header>
          <div className="triangle"></div>
          <Nav linkPage1="About" linkPage2="Portfolio" linkPage3="Contact" />
        </header>

        <div className="nameTitle">
          <h2>
            Bernadette <br />
            Estacio
          </h2>

          <h3>
            Web <br />
            Developer
          </h3>
        </div>
      </div>
    </main>
  </>
);

export default Home;
