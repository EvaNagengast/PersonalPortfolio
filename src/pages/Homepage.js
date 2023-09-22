import React from "react";
import Footer from "./Footer";
import TypeIt from "typeit-react";
import "./Homepage.css";

import { useNavigate } from "react-router-dom";








export default function Homepage() {


  let navigate = useNavigate();
  return (
    <div className="Homepage">
      <div className="App">
        <TypeIt className="heading">
        
         Eva Nagengast
        </TypeIt>
      </div>
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
