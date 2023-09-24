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
                        navigate("/aboutme");
                      }}
                    >
                      about me
                    </button>
                  </p>
                </div>

                <div>
                  <img src={Codeimage} className="codesnippet" alt="codesnippet"></img>
                </div>
              </div>
            </div>
          </div>

          <div className="projectsection">
            <h4>Projects</h4>
            <p>
              {" "}
              Browse through some assorted projects I created or find all of my
              projects here
            </p>
            <div className="projectOne">
              <img
                src={ProjectOneImg}
                alt="project example"
                className="img-fluid"
              ></img>
            </div>
            <div className="projectTwo">
              <img
                src={ProjectTwoImg}
                alt="project example "
                className="img-fluid"
              ></img>
            </div>
            <div className="projectThree">
              <img
                src={ProjectThreeImg}
                alt="project example"
                className="img-fluid"
              ></img>
            </div>{" "}
            <div className="projectFour">
              <img
                src={ProjectFourImg}
                alt="project example"
                className="img-fluid"
              ></img>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
