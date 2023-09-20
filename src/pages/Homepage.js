import React from "react";

import { useNavigate } from "react-router-dom";

export default function Homepage() {
  let navigate = useNavigate();
  return (
    <div>
      <h1> EVA NAGENGAST</h1>
      <h2> Aspiring Front-End Developer</h2>
      <br /> <br /> <br />{" "}
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Navbar
          </a>
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
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Features
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Pricing
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled">Disabled</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <br /> <br /> <br /> <br /> <br />
      <div className="row">
        <div className="col">dad</div>
        <div className="col">sadsa</div>
      </div>{" "}
      <br /> <br /> <br /> <br /> <br /> <br />
      <button
        onClick={() => {
          navigate("./Cv");
        }}
      >
        Work experience
      </button>
    </div>
  );
}
