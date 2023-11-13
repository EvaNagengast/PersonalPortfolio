import React from "react";
import { useNavigate } from "react-router-dom";
import ProjectOneImg from "../../media/projectOne.png";

import ProjectOnesmall from "../../media/ProjectOneSmall.png";
import ProjectTwoImg from "../../media/projectTwo.png";
import ProjectTwosmall from "../../media/ProjectTwoSmall.png";
import ProjectThreeImg from "../../media/ProjectThree.png";
import ProjectThreesmall from "../../media/ProjectThreeSmall.png";

import ProjectFourImg from "../../media/ProjectFour.png";
import ProjectFoursmall from "../../media/ProjectFourSmall.png";

import "./Projectsection.css";

import { motion } from "framer-motion";
import "./Aboutsection.css";

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
          <div className="row m-auto projectFour projectmargin ">
            <div className="col-12 col-sm-7 text-sm-end order-2 order-sm-1 projectTextleft">
              <h5>Author Website and Portfolio</h5>
              <div className="projectdescription">
                This Website was built to showcase the newest work of the author
                Jane Corry and to offer a unique glimpse into the author's
                world. To catch the eye of the user, the landing page shows a
                gloomy scene with animated flashing windows. The website also
                features a dynamic slideshow and a typewriter animation.
                <div className="projectTools">
                  Built with HTML, CSS, JavaScript, React, Embeds, Bootstrap,
                  npm Libraries
                </div>
                <a
                  href="https://www.janecorryauthor.com/"
                  target="_blank"
                  rel="noreferrer"
                  alt="Jane Corry Website"
                  className="m-3 px-3 py-1 btn-dark-base"
                >
                  go to page
                </a>
              </div>
            </div>
            <div className="col-12 col-sm-5 d-none d-sm-block order-1 order-sm-2">
              <motion.img
                src={ProjectFourImg}
                alt="project example"
                className="img-fluid projectImageleft"
                initial={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 2 }}
                whileInView={{ opacity: 1, scale: 1 }}
              />
            </div>
            <div className="col-12 col-sm-5 d-block d-sm-none order-1">
              <motion.img
                src={ProjectFoursmall}
                alt="project example"
                className="img-fluid pb-3 projectimgsmall"
                initial={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 2 }}
                whileInView={{ opacity: 1, scale: 1 }}
              />
            </div>
          </div>
          <div className="row m-auto projectOne projectmargin">
            <div className="col-12 col-sm-5 d-none d-sm-block">
              <motion.img
                src={ProjectOneImg}
                alt="project example"
                className="img-fluid py-4 projectImageright"
                initial={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 2 }}
                whileInView={{ opacity: 1, scale: 1 }}
              />
            </div>
            <div className="col-12 col-sm-5 d-block d-sm-none">
              <motion.img
                src={ProjectOnesmall}
                alt="project example"
                className="img-fluid pb-3 projectimgsmall "
                initial={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 2 }}
                whileInView={{ opacity: 1, scale: 1 }}
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
                  href="https://london-music-journey.netlify.app/"
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
              <motion.img
                src={ProjectTwoImg}
                alt="project example"
                className="img-fluid projectImageleft"
                initial={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 2 }}
                whileInView={{ opacity: 1, scale: 1 }}
              />
            </div>
            <div className="col-12 col-sm-5 d-block d-sm-none">
              <motion.img
                src={ProjectTwosmall}
                alt="project example"
                className="img-fluid pb-3 projectimgsmall"
                initial={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 2 }}
                whileInView={{ opacity: 1, scale: 1 }}
              />
            </div>
          </div>
          <div className="row m-auto projectmargin projectThree">
            <div className="col-12 col-sm-5 d-none d-sm-block">
              <motion.img
                src={ProjectThreeImg}
                alt="project example"
                className="img-fluid projectImageright"
                initial={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 2 }}
                whileInView={{ opacity: 1, scale: 1 }}
              />{" "}
            </div>
            <div className="col-12 col-sm-5 d-block d-sm-none">
              <motion.img
                src={ProjectThreesmall}
                alt="project example"
                className="img-fluid pb-3 projectimgsmall"
                initial={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 2 }}
                whileInView={{ opacity: 1, scale: 1 }}
              />{" "}
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
                  href="https://evas-pigeon-portfolio.netlify.app/"
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
        </div>
      </div>
    </div>
  );
}
