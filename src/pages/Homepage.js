import React from "react";
import Footer from "./Footer";
import "./Homepage.css";

import { useNavigate } from "react-router-dom";

export default function Homepage() {
  let navigate = useNavigate();
  return (
    <div className="Homepage"><header>
      <h1> Eva Nagengast</h1></header>
      <h2> Aspiring Front-End Developer</h2>
      <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
      <div className="row">
        <div className="col">dad</div>
        <div className="col">sadsa</div>
      </div>{" "}
      <br /> <br /> <br /> <br /> <br /> <br />
      <button
        onClick={() => {
          navigate("../Cv");
        }}
      >
        Work experience
      </button>
      <Footer />
    </div>
  );
}
