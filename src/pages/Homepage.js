import React from "react";
import Footer from "./Footer";
import TypeIt from "typeit-react";
import { motion } from "framer-motion";
import "./Homepage.css";

import { useNavigate } from "react-router-dom";

export default function Homepage() {

  let navigate = useNavigate();
  return (
    <div className="Homepage">
      <div className="container">
        <div className="hero">
          <TypeIt className="heading">Eva Nagengast</TypeIt>
          <h2> Aspiring Front-End Developer</h2>
          <h3>based in London</h3>
          <button>let's connect</button>
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
          <motion.div  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}className="child-two">
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
          <div className="child-two">see about me</div>
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
