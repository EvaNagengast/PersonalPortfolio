import React from "react";
import { useNavigate } from "react-router-dom";
import ProjectOneImg from "../../media/projectOne.png";
import ProjectTwoImg from "../../media/projectTwo.png";
import ProjectThreeImg from "../../media/ProjectThree.png";
import ProjectFourImg from "../../media/ProjectFour.png";
import "./Projectsection.css";
export default function Projectsection() {
  let navigate = useNavigate();
  return (
    <div className="Projectsection">
      <div className="projectbox">
        <h4 className="pt-4 pb-2">Projects</h4>
        <p className="projectIntro mt-3 mb-5">
          Browse through some assorted projects I created, or find all of my
          projects
          <button
            onClick={() => {
              navigate("/projects");
            }}
          >
            here
          </button>
        </p>
        <div>
          <div className="projectOne negativeMargin row ">
            <div className="col-5">
              <img
                src={ProjectOneImg}
                alt="project example"
                className="img-fluid projectImageright"
              />
            </div>
            <div className="col-7 text-start projectTextright">
              <h5>London Music Journey</h5>
              <div>
                Explore London through a musical journey - this web page
                combines embedded songs and maps, with grid layouts and
                responsive media queries. I illustrated the London
                Underground-themed icons to enhance the user experience and to
                spawn a connection with this beautiful city.
                <div className="projectTools">
                  Built with HTML, CSS, JavaScript, Embeds, Bootstrap
                </div>
                <a
                  href="https://bucolic-faun-a689bb.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                  alt="London Music Journey Webdite "
                  className="btn-dark-base mt-3"
                >
                  go to page
                </a>
              </div>
              <br />
            </div>
          </div>
          <div className="projectTwo negativeMargin row">
            <div className="col-7 text-end projectTextleft ">
              <h5>Dictionary</h5>
              <div>
                Built using Java Script React and enhanced with the capabilities
                of APIs and npm libraries, this page offers word definitions and
                related images for a search term. It becomes fun and engaging as
                the play button talks to the user with a simple click. Behind
                the scenes, I employed loops and React's mapping capabilities to
                seamlessly fetch and present the data.
                <div className="projectTools">
                  Built with HTML, CSS, React.js, APIs & npm Libraries
                </div>
                <a
                  href="https://evas-dictionary.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                  alt="Dictionary Website"
                  className="btn-dark-base mt-3"
                >
                  go to page
                </a>
              </div>
            </div>
            <div className="col-5">
              {" "}
              <img
                src={ProjectTwoImg}
                alt="project example "
                className="img-fluid projectImageleft"
              />
            </div>
          </div>
          <div className="projectThree negativeMargin row">
            <div className="col-5">
              {" "}
              <img
                src={ProjectThreeImg}
                alt="project example"
                className="img-fluid projectImageright"
              />
            </div>
            <div className="col-7 text-start projectTextright">
              <h5>Pigeon Showcase</h5>
              <div>
                From a concept to web reality, this Pigeon Showcase was
                carefully crafted using Bootstrap, media queries, and flexboxfor
                a responsive and visually appealing website. Originally
                conceived as a model showcase, I carefully and accurately
                translated the Figma design into a unique appreciation of
                pigeons, all while paying close attention to SEO to improve its
                online visibility.
                <div className="projectTools">
                  Built with HTML, CSS, JavaScript & Figma
                </div>
                <a
                  href="https://heartfelt-mermaid-f746f4.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                  alt="Pigeon Showcase Website"
                  className="btn-dark-base mt-3"
                >
                  go to page
                </a>
              </div>
            </div>
          </div>
          <div className="projectFour negativeMargin row">
            <div className="col-7 text-end projectTextleft">
              <h5>World Clock</h5>
              <div>
                With this World Clock App, users can effortlessly explore global
                time zones. This app uses HTML, CSS, and JavaScript and seamless
                API integration, to efficiently retrieves and display precise
                city times from all around the world. It's designed to be
                user-friendly and intuitive for a smooth experience.
                <div className="projectTools">
                  Built with HTML, CSS, JavaScript & APIs
                </div>
                <a
                  href="https://evas-world-clock.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                  alt="World Clock Website"
                  className="btn-dark-base mt-3"
                >
                  go to page
                </a>
              </div>
            </div>
            <div className="col-5 ">
              <img
                src={ProjectFourImg}
                alt="project example"
                className="img-fluid projectImageleft"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
