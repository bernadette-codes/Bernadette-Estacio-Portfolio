import React, { useState } from "react";
import Form from "../form/form";
import stamp from "../../../assets/img/misc/stamp.png";
import "./styles.scss";

const Envelope = () => {
  const [isOpen, setIsOpen] = useState(false);
  let envelopeVisibility = isOpen ? "envelopeOpen" : "envelopeClose";
  let perspectiveVisibility = isOpen ? "perspectiveOpen" : "perspectiveClose";
  let envelopeFlapVisibility = isOpen
    ? "envelopeFlapOpen"
    : "envelopeFlapClose";
  let contactLetterVisibility = isOpen
    ? window.innerWidth <= 668
      ? "contact-letterOpen1"
      : "contact-letterOpen2"
    : "contact-letterClose";

  const openClickHandle = () => {
    setIsOpen(true);
  };

  const closeClickHandle = () => {
    setIsOpen(false);
  };

  return (
    <div className="envelopeArea">
      <div className={`perspective ${perspectiveVisibility}`}>
        <div className={`envelope ${envelopeVisibility}`}>
          <div className="face front" onClick={openClickHandle}>
            <div className="white">
              <button>Contact Form</button>

              <div className="stamp">
                <img src={stamp} alt="stamp" width="85" height="70" />
              </div>
            </div>
          </div>

          <div className="face back">
            <div className={`envelopeFlap ${envelopeFlapVisibility}`}></div>
            <div className="folds"></div>
            <div className={`contact-letter ${contactLetterVisibility}`}>
              <div className="opening">
                <h3>
                  Get in touch! <span onClick={closeClickHandle}>&#10006;</span>
                </h3>

                <p>
                  Send me a message of the details of the project you would like
                  me to be part of and I will get back to you soon.
                </p>

                <Form />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Envelope;
