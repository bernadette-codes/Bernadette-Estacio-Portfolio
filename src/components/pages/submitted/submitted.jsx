import React from "react";
import Header from "../../context/header/header";
import SocialLinks from "../../context/socialLinks/socialLinks";

const Submitted = () => (
  <>
    <Header
      pageTitle="Contacted"
      linkPage1="Home"
      linkPage2="About"
      linkPage3="Portfolio"
    />

    <main className="contact">
      <div className="intro">
        <p>Your message was submitted successfully!</p>

        <p>I will get back to you shortly.</p>

        <p>Find me on:</p>
        <SocialLinks />
      </div>
    </main>
  </>
);

export default Submitted;
