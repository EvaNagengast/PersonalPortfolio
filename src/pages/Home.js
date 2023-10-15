import React from "react";
// import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
// import { motion, useAnimation, useInView } from "framer-motion";
import Aboutsection from "./subpage/Aboutsection";
import Projectsection from "./subpage/Projectsection";
import Contactsection from "./subpage/Contactsection";
import Footer from "./Footer";

import "./Home.css";

export default function Homepage() {
  let navigate = useNavigate();

  let handleClick = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="Home">
      <div className="homepage">
        <div className="hero">
          <h1 className="m-3 mt-md-4">Eva Nagengast</h1>
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
                navigate("./contact");
              }}
              className="m-2 px-2 py-1"
            >
              LET'S CONNECT
            </button>
            <button onClick={() => handleClick()} className="m-2  px-2 py-1">
              EXPLORE MY PAGE
            </button>
          </motion.div>
        </div>
        <main>
          <div className="aboutsection" id="about">
            {" "}
            <Aboutsection />
          </div>

          <div className="projectsection  ">
            <Projectsection />
          </div>
          <div className="contactsection">
            {" "}
            <Contactsection />
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
