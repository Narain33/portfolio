import React from "react";
import "./footer.css"
function Footer() {
    return (
      <div className="footer">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="footer1 text-center">
              <h1>Narain Karthick</h1>
              <h6>Web Developer</h6>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="footer2">
            <a href ="#about">About</a><br/>
              <a href ="#projects">Projects</a><br/>
                <a href="#techs">Technical</a><br/>
                <a href="#cnt">Contact</a><br/>
                <a href="#cnt">Resume</a>
            </div>
          </div>
        </div>
        <div className="text-center">
          <p>Designed & Maintained By Narain</p>
        </div>
      </div>
    );
  }
export default Footer;  