import React from "react";
import tools from "./tools";
import "./styles.scss";

const HoneyComb = () => (
  <div>
    {Object.keys(tools).map((category) => (
      <div key={category}>
        <h3>{category}</h3>

        <ul className="honeycomb">
          {Object.entries(tools[category]).map(([key, value]) => (
            <li key={key}>
              <div className="honeycomb-contents">
                <div className="honeycomb-img">
                  <img src={value} alt={key} />
                </div>
                <div className="title">{key}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);

export default HoneyComb;
