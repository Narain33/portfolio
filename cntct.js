import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import alertify from "alertifyjs";
import "alertifyjs/build/css/alertify.min.css";
import "./cntct.css";
import git from "./icons8-github.svg";
import linkedin from "./icons8-linkedin-circled.svg";
import Insta from "./icons8-insta.svg";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    emailjs.init("wO-GVrvhJ94AUzL47"); // Replace with your actual User ID
    alertify.set("notifier", "position", "top-right");
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send("service_tm98wi8", "template_a0myedo", {
        from_name: name, // Use "from_name" to match the template
        from_email: email, // Use "from_email" to match the template
        message: message,
      })
      .then(
        function (response) {
          console.log("Email sent successfully:", response);
          alertify.success("Email sent successfully");
          setFormSubmitted(true);
        },
        function (error) {
          console.error("Email sending failed:", error);
        }
      );
  };

  return (
    <div className="cntct">
      <div className="row">
        <div className="col-12 col-md-6">
          <div className="cntct1">
            <h1>CONTACT ME</h1>
            <p>
              <b>EMAIL: </b>
              <a href="mailto:narainkarthick25@gmail.com">
                narainkarthick25@gmail.com
              </a>
            </p>
            <br />
            {/* <p>
              <b>PHONE:</b> <br />
              <a href="tel:+919360414257">+91 9360414257</a>
            </p> */}
            <span className="git">
              <a href="https://github.com/Narain33" target="_blank">
                <img src={git} alt="github" width="30" height="30" />
              </a>
            </span>
            <span className="linkedin">
              <a
                href="https://www.linkedin.com/in/narain-karthick/"
                target="_blank"
              >
                <img src={linkedin} alt="linkedin" width="30" height="30" />
              </a>
            </span>

            <span className="insta">
              <a
                href="https://instagram.com/naraxn.s?igshid=MzRlODBiNWFlZA=="
                target="_blank"
              >
                <img
                  src={Insta}
                  alt="instagram"
                  width="30"
                  height="30"
                  style={{ borderRadius: "50%", border: "1px solid white" }}
                />
              </a>
            </span>
            <br />
            <br />
          </div>
          <div className="download cv">
            <a href="NARAIN_KARTHICK.pdf" target="_blank" download>
              <button type="button" className="btn btn-primary">
                Download CV
              </button>
            </a>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="cntct2">
            {formSubmitted ? (
              <div className="success-message">
                Thank you! Your message has been sent.
              </div>
            ) : (
              <form onSubmit={sendEmail}>
                <div className="form-group">
                  <label htmlFor="name">Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your name"
                    id="name"
                    name="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                    id="email"
                    name="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message:</label>
                  <textarea
                    className="form-control"
                    placeholder="Enter your message"
                    id="message"
                    name="message"
                    rows="3"
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
