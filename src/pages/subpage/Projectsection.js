import React from "react";
import { useNavigate } from "react-router-dom";
import ProjectOneImg from "../../media/projectOne.png";
import ProjectTwoImg from "../../media/projectTwo.png";
import ProjectThreeImg from "../../media/ProjectThree.png";
import ProjectFourImg from "../../media/ProjectFour.png";
import ProjectOnesmall from "../../media/ProjectOneSmall.png";
import ProjectTwosmall from "../../media/ProjectTwoSmall.png";
import ProjectThreesmall from "../../media/ProjectThreeSmall.png";
import ProjectFoursmall from "../../media/ProjectFourSmall.png";

import "./Projectsection.css";
export default function Projectsection() {
  let navigate = useNavigate();
  return (
    <div className="Projectsection">
      <div className="projectbox">
        <h4 className="pt-4 pb-2">Projects</h4>
        <p className="mt-2 mt-sm-3 mb-sm-5 projectIntro">
          Browse through some assorted projects I created,
          <br className="d-block d-lg-none" /> or find all of my projects
          <button
            onClick={() => {
              navigate("/projects");
            }}
          >
            here
          </button>
        </p>
        <div className="pt-3 pt-sm-4">
          <div className="row m-auto projectOne projectmargin">
            <div className="col-12 col-sm-5 d-none d-sm-block">
              <img
                src={ProjectOneImg}
                alt="project example"
                className="img-fluid projectImageright"
              />
            </div>
            <div className="col-12 col-sm-5 d-block d-sm-none">
              <img
                src={ProjectOnesmall}
                alt="project example"
                className="img-fluid pb-3 projectimgsmall "
              />
            </div>
            <div className="col-12 col-sm-7 text-sm-end projectTextright">
              <h5>London Music Journey</h5>
              <div className="projectdescription">
                Explore London through a musical journey! This web page combines
                embedded songs and maps, with grid layouts and responsive media
                queries. I illustrated the London Underground-themed icons to
                enhance the user experience and to spawn a connection with this
                beautiful city.
                <div className="projectTools">
                  Built with HTML, CSS, JavaScript, Embeds & Bootstrap
                </div>
                <a
                  href="https://bucolic-faun-a689bb.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                  alt="London Music Journey Webdite "
                  className="m-3 px-3 py-1 btn-dark-base"
                >
                  go to page
                </a>
              </div>
              <br />
            </div>
          </div>
          <div className="row m-auto projectTwo projectmargin ">
            <div className="col-12 col-sm-7 text-sm-end order-2 order-sm-1 projectTextleft">
              <h5>Dictionary</h5>
              <div className="projectdescription">
                Built using React.js with the help of npm libraries and enhanced
                with APIs, this page offers word definitions and related images
                for a search term. It becomes fun and engaging as the animated
                play button talks to the user. Behind the scenes, I employed
                loops and React's mapping capabilities to fetch and present the
                data.
                <div className="projectTools">
                  Built with HTML, CSS, React.js, APIs & npm Libraries
                </div>
                <a
                  href="https://evas-dictionary.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                  alt="Dictionary Website"
                  className="m-3 px-3 py-1 btn-dark-base"
                >
                  go to page
                </a>
              </div>
            </div>
            <div className="col-12 col-sm-5 d-none d-sm-block order-1 order-sm-2">
              <img
                src={ProjectTwoImg}
                alt="project example "
                className="img-fluid projectImageleft"
              />
            </div>
            <div className="col-12 col-sm-5 d-block d-sm-none">
              <img
                src={ProjectTwosmall}
                alt="project example"
                className="img-fluid pb-3 projectimgsmall"
              />
            </div>
          </div>
          <div className="row m-auto projectmargin projectThree">
            <div className="col-12 col-sm-5 d-none d-sm-block">
              <img
                src={ProjectThreeImg}
                alt="project example"
                className="img-fluid projectImageright"
              />
            </div>
            <div className="col-12 col-sm-5 d-block d-sm-none">
              <img
                src={ProjectThreesmall}
                alt="project example"
                className="img-fluid pb-3 projectimgsmall"
              />
            </div>
            <div className="col-12 col-sm-7 text-sm-end projectTextright">
              <h5>Pigeon Showcase</h5>
              <div className="projectdescription">
                From a concept to web reality, this Pigeon Showcase was built
                using Bootstrap, media queries, and flexbox for a responsive and
                beautiful website. Originally conceived as a model showcase, I
                carefully and accurately translated the Figma design into a
                unique appreciation of pigeons, all while paying close attention
                to SEO.
                <div className="projectTools">
                  Built with HTML, CSS, JavaScript & Figma
                </div>
                <a
                  href="https://heartfelt-mermaid-f746f4.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                  alt="Pigeon Showcase Website"
                  className="m-3 px-3 py-1 btn-dark-base "
                >
                  go to page
                </a>
              </div>
            </div>
          </div>
          <div className="row m-auto projectFour projectmargin ">
            <div className="col-12 col-sm-7 text-sm-end order-2 order-sm-1 projectTextleft">
              <h5>World Clock</h5>
              <div className="projectdescription">
                With the World Clock App, users can explore global time zones.
                This app uses HTML+CSS, JavaScript and seamless API integration,
                to efficiently retrieve and display city times from all around
                the world. It's designed to be intuitive and easy to use for a
                smooth user-experience.
                <div className="projectTools">
                  Built with HTML, CSS, JavaScript & APIs
                </div>
                <a
                  href="https://evas-world-clock.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                  alt="World Clock Website"
                  className="m-3 px-3 py-1 btn-dark-base"
                >
                  go to page
                </a>
              </div>
            </div>
            <div className="col-12 col-sm-5 d-none d-sm-block order-1 order-sm-2">
              <img
                src={ProjectFourImg}
                alt="project example"
                className="img-fluid projectImageleft"
              />
            </div>
            <div className="col-12 col-sm-5 d-block d-sm-none order-1">
              <img
                src={ProjectFoursmall}
                alt="project example"
                className="img-fluid pb-3 projectimgsmall"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
