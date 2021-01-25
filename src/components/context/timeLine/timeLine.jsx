import React from "react";
import skillsList from "./skills";
import "./styles.scss";

const TimeLine = () => (
  <ul className="skills">
    {Object.keys(skillsList).map((year) => (
      <li key={year}>
        <div className="diamond"></div>
        <div className="skill-set">
          <p className="skill-year">{year}</p>
          <div className="skill-list">
            {Object.entries(skillsList[year]).map(([key, value]) => (
              <figure key={key}>
                <img src={value} alt={key} />
                <figcaption>{key}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </li>
    ))}
  </ul>
);

export default TimeLine;
