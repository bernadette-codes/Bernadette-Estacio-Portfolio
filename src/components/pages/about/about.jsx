import React from "react";
import Header from "../../context/header/header";
import SocialLinks from "../../context/socialLinks/socialLinks";
import TimeLine from "../../context/timeLine/timeLine";
import HoneyComb from "../../context/honeycomb/honeycomb";
import Footer from "../../context/footer/footer";
import Gif1 from "../../../assets/img/misc/adventure1.gif";
import Gif2 from "../../../assets/img/misc/adventure2.gif";
import Gif3 from "../../../assets/img/misc/adventure3.gif";
import "./styles.scss";

const About = () => (
  <>
    <Header
      pageTitle="About"
      linkPage1="Home"
      linkPage2="Portfolio"
      linkPage3="Contact"
    />

    <main>
      <section className="aboutSection">
        <div className="row1">
          <div className="container">
            <div className="aboutContent">
              <p>Hello, I am Bernadette! I'm a web developer.</p>

              <p>
                I learned how to make a basic website in High School and I
                started website development in 2014.
              </p>

              <p>
                I taught myself OOP by coding games using JavaScript. My first
                OOP language is JavaScript, and I learned to code in Java and
                Python as well.
              </p>
            </div>
            <div className="gifImg">
              <img src={Gif1} className="gifTile" alt="Adventure photos" />
            </div>
          </div>
        </div>

        <div className="row2">
          <div className="container">
            <div className="aboutContent">
              <p>
                In addition to coding, I enjoy working with CSS and Bootstrap to
                build websites. Wordpress is my favorite CMS and I develop
                websites using JS frameworks like jQuery, AngularJS & ReactJS.
              </p>

              <p>
                Aside from coding, I love to travel around the world and I've
                been fortunate to visit 13 nations in the last 2 years.
              </p>
            </div>
            <div className="gifImg">
              <img src={Gif2} className="gifTile" alt="Adventure photos" />
            </div>
          </div>
        </div>

        <div className="row3">
          <div className="container">
            <div className="aboutContent">
              <div className="edu">
                <h3>Education</h3>
                <ul>
                  <li>
                    <i className="fas fa-running"></i>Master of Business
                    Administration
                  </li>
                  <li>
                    <i className="fas fa-graduation-cap"> </i>Bachelor of
                    Business Management
                  </li>
                  <li>
                    <i className="fas fa-graduation-cap"> </i>Bachelor of
                    Science in Mathematics
                  </li>
                </ul>
              </div>

              <SocialLinks />
            </div>
            <div className="gifImg">
              <img src={Gif3} className="gifTile" alt="Adventure photos" />
            </div>
          </div>
        </div>
      </section>

      <section className="skillsSection">
        <div>
          <h3>Coding Experience</h3>
          <TimeLine />
        </div>

        <HoneyComb />
      </section>
    </main>

    <Footer />
  </>
);

export default About;
