import React from "react";
import Footer from "./Footer";
import "./Aboutme.css";
import { useNavigate } from "react-router-dom";

export default function Aboume() {
  let navigate = useNavigate();
  return (
    <div className="Aboutme">
      <div className="aboutmepage">
      <div className="heading">
        <h1>Hi I'm Eva</h1>
      </div>
      <main>
        aboutme
        <br /> see my projects{" "}
        <button
          onClick={() => {
            navigate("../projects");
          }}
        >
          hherer
        </button>
      </main></div>
      <Footer />
    </div>
  );
}
