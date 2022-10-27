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
              <p>Hello, I am Bernadette! I'm a software developer.</p>

              <p>
                I learned how to make a website in High School and I started
                software development in 2014.
              </p>

              <p>
                I taught myself OOP by coding games using JavaScript, and I
                learned to code in Java and Python as well.
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
                build websites. I develop websites using JS frameworks like
                jQuery, Angular & React and I have used WordPress and AEM for
                CMS.
              </p>

              <p>
                Aside from coding, I love to travel around the world and I've
                been fortunate to visit 18 nations in the last 4 years.
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
                <h3>
                  <i className="fas fa-graduation-cap"> </i>Education
                </h3>
                <ul>
                  <li>Master of Business Administration</li>
                  <li>Bachelor of Business Management</li>
                  <li>Bachelor of Science in Mathematics</li>
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
