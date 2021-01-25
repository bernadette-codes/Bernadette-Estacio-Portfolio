import React from "react";
import Header from "../../context/header/header";
import SocialLinks from "../../context/socialLinks/socialLinks";
import Envelope from "../../context/envelope/envelope";
import "./styles.scss";

const Contact = () => (
  <>
    <Header
      pageTitle="Contact"
      linkPage1="Home"
      linkPage2="About"
      linkPage3="Portfolio"
    />

    <main className="contact">
      <div className="intro">
        <p>Thanks for visiting my website!</p>

        <p>
          Send me an email at<span> bernadette@englemaninvest.com</span>
        </p>

        <p>
          or send me a message <span>using the contact form below.</span>
        </p>

        <p>Find me on:</p>
        <SocialLinks />
      </div>

      <Envelope />
    </main>
  </>
);

export default Contact;
