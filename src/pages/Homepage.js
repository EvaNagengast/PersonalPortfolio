import React, { useEffect, useRef } from "react";
import Footer from "./Footer";
import TypeIt from "typeit-react";
import { motion, useAnimation, useInView } from "framer-motion";

import "./Homepage.css";

import { useNavigate } from "react-router-dom";

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
    <div className="Homepage">
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
            <button>let's connect</button>
          </motion.div>
         
        </div>
        <main>
          <div className="child-one">
            txt
            <br /> txt txt
            <br /> txt txt
            <br /> txt txt
            <br /> txt txt
            <br /> txt txt
            <br /> txt txt
            <br /> txt txt
            <br /> txt txt
            <br /> txt txt
            <br /> txt txt
            <br /> txt txt
            <br /> txt txt
            <br /> txt txt
            <br /> txt
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
            <br /> txt txt
            <br /> txt txt
            <br /> txt txt
            <br /> txt txt
            <br /> txt txt
            <br /> txt txt
            <br /> txt txt
            <br /> txt txt
            <br /> txt
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
