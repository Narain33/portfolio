import React, { Component } from "react";
import five from "./fives.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/js/dist/util";
import "bootstrap/js/dist/popover";
import "bootstrap/js/dist/dropdown";
import git from "./icons8-github.svg";
import linkedin from "./icons8-linkedin-circled.svg";
import "./App.css";
import kr from "./kr.jpeg";
// import nkp from "./56.jpg";
import genz from "./genz.jpeg";
import nflix from "./LogoNetflix1.png";
import Tech from "./tech";
import Cntct from "./cntct";
import Footer from "./footer";
// import cntct from "./cntct";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Narain Karthick.S",
      currentIndex: 0,

      showNewContent: false,
    };
  }

  componentDidMount() {
    this.interval = setInterval(this.incrementText, 100);
    setTimeout(() => {
      this.setState({ showNewContent: true });
    }, 2000);
  }

  incrementText = () => {
    const { text, currentIndex } = this.state;
    if (currentIndex < text.length) {
      this.setState({ currentIndex: currentIndex + 1 });
    } else {
      clearInterval(this.interval);
    }
  };

  render() {
    const { text, currentIndex, showNewContent } = this.state;
    const displayedText = text.slice(0, currentIndex);

    return (
      <div className="App">
        {showNewContent ? (
          <div
            className="container  d-flex flex-column "
            style={{ fontFamily: "Roboto, sans-serif" }}
          >
            <div className="cntnrs">
              <div class="card narr fixed-top mx-0 mb-5" >
                <div class="card-header">
                  <div className="row d-flex justify-content-evenly">
                    <div className="col-auto">
                      <div className="btn btn-light btn-sm rounded-0 bg-transparent border-0">
                        <a href="#about">About</a>
                        
                      </div>
                    </div>
                    <div className="col-auto">
                      <div className="btn btn-light btn-sm rounded-0 bg-transparent border-0">
                        <a href="#projects">Projects</a>
                        
                      </div>
                    </div>
                    <div className="col-auto">
                      <div className="btn btn-light btn-sm rounded-0 bg-transparent border-0">
                        <a href="#techs">Tech's</a>
                        
                      </div>
                    </div>
                    <div className="col-auto">
                      <div className="btn btn-light btn-sm rounded-0 bg-transparent border-0">
                        <a href="#cnt">Contact</a>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="x">
              <br />
              <br />
              <br />
              <br />

            </div> */}
              <div className="row mb-5 pt-5 mt-5" id="about">
                <div className="col-12">
                  <h2 className="text-light mb-5">About</h2>
                </div>

                <div className="abt col-12 text-light" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                  <p>
                    <i>
                      {" "}
                      My portfolio showcases my expertise as a web developer,
                      featuring a range of projects that highlight my skills in
                      coding and problem-solving. Feel free to explore
                      my work and get in touch to discuss potential
                      collaborations.
                    </i>
                  </p>
                  <p>
                    <i>
                      Every project in my portfolio represents a unique
                      challenge I've eagerly embraced. I believe in the power of
                      innovation and user-centric design, aiming to create
                      websites and applications that leave a lasting impact.
                    </i>
                  </p>
                  <p>
                    <i>
                      My journey as a web developer is marked by continuous
                      learning and growth. I stay up-to-date with the latest
                      industry trends and technologies, ensuring that I can
                      adapt to any client's needs.
                    </i>
                  </p>
                </div>
              </div>
              {/* the project part */}
              <div className="row">
                <div className="col-12">
                  <h2 className=" text-light mb-5">Projects</h2>
                </div>
              </div>
              <div className=" prjcts  row" id="projects">
                <div className="card-group">
                  <div className="col-12 col-md-6 col-lg-3">
                    <div className="card c1">
                      <div className="card-front">
                        <img
                          src={five}
                          className="card-img-top"
                          alt="five"
                          width="300"
                          height="300"
                        />
                      </div>
                      <div className="card-back">
                        <div className="card-body">
                          <h5 className="card-title">FIVE</h5>
                          <p className="card-text">
                            This is the collaborative web Application project
                            with my Team for the blog and post making!
                          </p>

                          <a href="http://albingcj.uk.to/five/" target="_blank">
                            View Project
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-3">
                    <div className="card c2">
                      <div className="card-front">
                        <img
                          src={kr}
                          className="card-img-top"
                          alt="kr"
                          width="300"
                          height="300"
                        />
                      </div>
                      <div className="card-back">
                        <div className="card-body">
                          <h5 className="card-title">ITKM_MKCE</h5>
                          <p className="card-text">
                            This is the project for the ITKM team of MKCE. This
                            is the web application for the Asset Management.
                          </p>

                          <a
                            href="https://github.com/Narain33/itkm_mkce"
                            target="_blank"
                          >
                            View Project
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-3">
                    <div className="card c3">
                      <img
                        src={genz}
                        className="card-img-top"
                        alt="genz"
                        height="300"
                        width="300"
                      />
                      <div className="card-body">
                        <h5 className="card-title">GEN_Z</h5>
                        <p className="card-text">
                          This this the project for the GEN_Z E-Learning
                          Platform we can learn the courses in this platform.
                        </p>
                      </div>
                      <div className="card-footer">
                        <small className="text-muted">
                          <a
                            href="https://github.com/Narain33/gen-z"
                            target="_blank"
                          >
                            View Project
                          </a>
                        </small>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-3">
                    <div className="card c4">
                      <img
                        src={nflix}
                        className="card-img-top"
                        alt="genz"
                        height="300"
                        width="300"
                      />

                      <div className="card-body">
                        <h5 className="card-title">NFLIX</h5>
                        <p className="card-text">
                          This is the clone of the Netflix. This is static
                          webpage which i had cloned for Education purpose.
                        </p>
                      </div>
                      <div className="card-footer">
                        <small className="text-muted">
                          <a
                            href="https://github.com/Narain33/flixn"
                            target="_blank"
                          >
                            View Project
                          </a>
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*  end of the  project part */}
              <br />
              <br />
              <div className="row" id="techs">
                <div className="col-12">
                  <h2 className=" text-light mb-5">Technologies</h2>
                </div>
                <Tech />
              </div>
              <br />
              <br />

              <div className="row" id="cnt">
                <div className="col-12">
                  <h2 className=" text-light mb-5">Contact</h2>
                </div>
                <Cntct />
              </div>

              <div className="row">
                <div className="col-12">
                  <h2 className=" text-light mb-5"></h2>
                </div>
                <Footer />
              </div>
            </div>
          </div>
        ) : (
          <div className="center frame">
            <div className="container d-flex flex-column justify-content-center align-items-center">
              
              <div className="cntnrs">
                <div
                  className="Narain row mt-5 pt-5"
                  style={{ fontFamily: "Roboto, sans-serif" }}
                >
                  <p>HI I'M {displayedText}</p>
                </div>
                <br />

                <div
                  className="Karthick row"
                  style={{ fontFamily: "Roboto, sans-serif" }}
                >
                  <p>Web Dev</p>
                </div>
                <div className="nks">
                  <>
                    <span className="git">
                      <a href="https://github.com/Narain33" target="_blank">
                        <img src={git} alt="github" width="30" height="30" />
                      </a>
                    </span>
                  </>
                  <>
                    <span className="linkedin">
                      <a
                        href="https://www.linkedin.com/in/narain-karthick/"
                        target="_blank"
                      >
                        <img
                          src={linkedin}
                          alt="linkedin"
                          width="30"
                          height="30"
                        />
                      </a>
                    </span>
                  </>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="center shadow"></div>
      </div>
    );
  }
}
export default App;
