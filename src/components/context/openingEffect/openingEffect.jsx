import React from "react";
import "./styles.scss";

const OpeningEffect = () => (
  <div className="welcomeAnim">
    <div className="load">
      <h1>
        Bernadette <br />
        Estacio
      </h1>
    </div>

    <div className="load-box">
      <svg width="100%" height="100%">
        <rect width="100%" height="100%" />
      </svg>
    </div>

    <div className="load-full">
      <svg width="100%" height="100%">
        <rect width="100%" height="100%" />
      </svg>
    </div>
  </div>
);

export default OpeningEffect;
