import React from "react";

import { useNavigate } from "react-router-dom";

export default function Homepage() {
  let navigate = useNavigate();
  return (
    <div>
      {/* <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <button
            class="navbar-brand"
            onClick={() => {
              navigate("./Cv");
            }}
          >
            Navbar
          </button>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <button
                  class="nav-link active"
                  aria-current="page"
                  onClick={() => {
                    navigate("./Cv");
                  }}
                >
                  Home
                </button>
              </li>
              <li class="nav-item">
                <button
                  class="nav-link"
                  onClick={() => {
                    navigate("./Cv");
                  }}
                >
                  Features
                </button>
              </li>
              <li class="nav-item">
                <button
                  class="nav-link"
                  onClick={() => {
                    navigate("./Cv");
                  }}
                >
                  Pricing
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}
      <h1> EVA NAGENGAST</h1>
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
    </div>
  );
}
