import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useAnimation, useInView } from "framer-motion";
import TypeIt from "typeit-react";
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
          <TypeIt className="heading">Eva Nagengast</TypeIt>
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
          <div className="aboutsection" id="about-one">
            <div className="row">
              <div className="col-3">
                <img src={Profilepic}></img>
              </div>
              <div className="col-9">
                Hi, I'm Eva! <br />I have experience designing and developing
                visually appealing and eye catching responsive websites and
                apps. Have Fun exploring my page or
                <button
                  onClick={() => {
                    navigate("/cv");
                  }}
                >
                  learn more about me
                </button>
              </div>
            </div>
          </div>
          <motion.div
            ref={ref}
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
