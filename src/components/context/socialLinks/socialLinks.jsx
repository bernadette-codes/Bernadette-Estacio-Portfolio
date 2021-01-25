import React from "react";
import socialList from "./social";
import "./styles.scss";

const SocialLinks = () => (
  <div>
    <ul className="social">
      {socialList.map((social) => (
        <li key={social.title}>
          <a
            href={social.link}
            title={social.title}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className={social.icon}></i>
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default SocialLinks;
