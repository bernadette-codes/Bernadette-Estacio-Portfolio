import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./styles.scss";

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

const Form = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  let history = useHistory();

  const inputHandle = (evt) => {
    setInput({
      ...input,
      [evt.target.name]: evt.target.value,
    });
  };

  const handleSubmit = (evt) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "contactForm-Portfolio": "contact", ...input }),
    })
      .then(() => {
        history.push("/submitted");
      })
      .catch((error) => alert(error));
    evt.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} data-netlify="true">
      <input type="hidden" name="contactForm-Portfolio" value="contact" />
      <div className="contact-field">
        <label htmlFor="Name">Name</label>
        <input
          name="name"
          type="text"
          className="form-control"
          value={input.name}
          onChange={(e) => inputHandle(e)}
          required
        ></input>
      </div>
      <div className="contact-field">
        <label htmlFor="Email">Email: </label>
        <input
          name="email"
          type="email"
          className="form-control"
          value={input.email}
          onChange={(e) => inputHandle(e)}
          required
        />
      </div>
      <div className="contact-field">
        <label htmlFor="Subject">Subject: </label>
        <input
          name="subject"
          type="text"
          className="form-control"
          value={input.subject}
          onChange={(e) => inputHandle(e)}
          required
        />
      </div>
      <div className="contact-field">
        <label htmlFor="Message">Message: </label>
        <textarea
          name="message"
          row="3"
          className="form-control"
          value={input.message}
          onChange={(e) => inputHandle(e)}
          required
        />
      </div>
      <div className="contact-field">
        <input className="btn pull-left" type="submit" value="Submit" />
      </div>
    </form>
  );
};

export default Form;
