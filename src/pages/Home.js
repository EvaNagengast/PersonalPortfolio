import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useAnimation, useInView } from "framer-motion";
import Footer from "./Footer";
import Profilepic from "../media/profilepic.png";
import ProjectOneImg from "../media/projectOne.png";
import ProjectTwoImg from "../media/projectTwo.png";
import ProjectThreeImg from "../media/ProjectThree.png";
import ProjectFourImg from "../media/ProjectFour.png";
import Codeimage from "../media/codefour.png";
import "./Home.css";

export default function Homepage() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);
  let navigate = useNavigate();
  return (
    <div className="Home">
      <div className="homepage">
        <div className="hero">
          <h1>Eva Nagengast</h1>
          <motion.div
            variants={{
              noshow: { opacity: 0, y: 100 },
              show: { opacity: 1, y: 0 },
            }}
            initial="noshow"
            animate="show"
            transition={{ duration: 2, delay: 1 }}
            className="subheader"
          >
            <h2>Aspiring Front-End Developer</h2>
            <h3>based in London</h3>
            <button
              onClick={() => {
                navigate("./Cv");
              }}
            >
              let's connect
            </button>
            <button>
              <a href="#about-one">explore my page</a>
            </button>
          </motion.div>
        </div>
        <main>
          <div className="aboutsection" id="about-one" ref={ref}>
            <div className="row">
              <div className="col-3">
                <motion.img
                  src={Profilepic}
                  variants={{
                    hidden: { opacity: 0, x: -70 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  initial="hidden"
                  animate={mainControls}
                  transition={{ duration: 1.5, delay: 0.5 }}
                  alt="profile"
                  className="profilepicture"
                ></motion.img>
              </div>
              <div className="col-9  abouttext">
                <div>
                  <p>
                    Hi, I'm Eva! <br />I love designing and developing
                    beautiful, eye catching and responsive websites. Have fun
                    exploring my page or learn more
                    <button
                      onClick={() => {
                        navigate("./aboutme");
                      }}
                    >
                      about me
                    </button>
                  </p>
                </div>

                <div>
                  <img
                    src={Codeimage}
                    className="codesnippet"
                    alt="codesnippet"
                    onClick={() => {
                      navigate("/contact");
                    }}
                  ></img>
                </div>
              </div>
            </div>
          </div>

          <div className="projectsection pt-5">
            <h4 className="py-5">Projects</h4>
            <p className="pb-4">
              Browse through some assorted projects I created or find all of my
              projects{" "}
              <button
                onClick={() => {
                  navigate("/projects");
                }}
              >
                here
              </button>
            </p>
            <div className="projectOne row">
              <div className="col-6">
                <img
                  src={ProjectOneImg}
                  alt="project example"
                  className="img-fluid"
                />
              </div>
              <div className="col-6 text-start">
                <h5>London Music Journey</h5>
                <p>
                  A page to whow... to learn how to embed implemented: grids,
                  media queries, cards Built with HTML, CSS, Java, Embeds,
                  Bootstrap{" "}
                </p>
                <br />
              </div>
            </div>
            <div className="projectTwo row">
              <div className="col-6 text-end">
                <h5>Dictionary</h5>
                <p>
                  A page to find used to vertiefen React knowledge, implement
                  Apis,multiple components, map objects
                  <br />
                  Built with HTML, CSS, JSReact,APIs & npm Libraries{" "}
                </p>
              </div>
              <div className="col-6">
                {" "}
                <img
                  src={ProjectTwoImg}
                  alt="project example "
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="projectThree row">
              <div className="col-6">
                {" "}
                <img
                  src={ProjectThreeImg}
                  alt="project example"
                  className="img-fluid"
                />
              </div>
              <div className="col-6 text-start">
                <h5>Pigeon Showcase</h5>
                <p>
                  A page built after a learn to build by design, tools: SEO,
                  media queries, flexbox, wireframe,
                  <br />
                  Built with HTML, CSS, JavaScript & Figma{" "}
                </p>
              </div>
            </div>
            <div className="projectFour row">
              <div className="col-6 text-end">
                <h5>World Clock</h5>
                <p>Built with HTML, CSS and JavaScript </p>
              </div>{" "}
              <div className="col-6">
                {" "}
                <img
                  src={ProjectFourImg}
                  alt="project example"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
