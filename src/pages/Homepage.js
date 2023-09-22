import React from "react";
import Footer from "./Footer";
import TypeIt from "typeit-react";
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
         
        </div>
        <main ref={ref}>
          <div className="child-one">see projects</div>
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
