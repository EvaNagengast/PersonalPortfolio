import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useAnimation, useInView } from "framer-motion";
import Footer from "./Footer";
import Profilepic from "../media/profilepic.png";

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
      <div className="container">
        <div className="hero">
          <h1 className="heading">Eva Nagengast</h1>
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
                ></motion.img>
              </div>
              <div className="col-9 pt-5 abouttext">
                Hi, I'm Eva! <br />I love designing and developing visually
                appealing and eye catching responsive websites and apps. Have
                Fun exploring my page or learn more
                <button
                  onClick={() => {
                    navigate("/cv");
                  }}
                >
                  about me
                </button>
                <div className="codeHeader row">
                  <div className="col-10">Eva Nagengast</div>{" "}
                  <div className="col-2">x</div>
                </div>
                <div className="codeHeader"></div>
                <div className="codesnippet">
                  {/* ["nagengasteva@gmail.com", "LinkedIn", "GitHub"] basicInfo{" "} */}
                
                  <br />
                  location: "London"{"}"}
                  <br />
                  contactInfo {"{"}
                  <br />
                  mail: "nagengasteva@gmail.com"
                  <br />
                  LinkedIn: "/evanagengast"
                  <br />
                  GitHub: "/EvaNagengast"{"}"}
                  <br />
                  .CV {"["}"evaNagengast.pdf"{"]"}
                  <br />
                  .interests {"["}"Web Development", "Music", "Suirrels",
                  "Crafts"{"]"}
                  .skills ["React.js",
                  "HTML && CSS", "JavaScript", "GitHub"]
                </div>
              </div>
            </div>
          </div>
          <div className="projectsection"></div>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 70 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="child-two"
          >
            see about me txt
            <br /> txt txt
            <br /> txt txt
            <br /> txt txt
            <br /> txt txt
            <br /> txt txt
          </motion.div>
          <div className="child-three">see about me</div>
        </main>
        <button
          onClick={() => {
            navigate("../Cv");
          }}
        >
          Work experience
        </button>
      </div>
      <Footer />
    </div>
  );
}
