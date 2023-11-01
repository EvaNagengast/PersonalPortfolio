import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import Home from "./Home";
import AboutMe from "./Aboutme";
import Contact from "./Contact";
import Project from "./Projects.js";
import Cv from "./Cv";
import Error from "./Error";
import Logo from "../media/smalllogo.png";
import "./Navbar.css";

export default function Navbar() {
  let routes = (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/aboutme" element={<AboutMe />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/projects" element={<Project />} />
      <Route path="/cv" element={<Cv />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );

  return (
    <div className="Navbar">
      <Router>
        <nav className="navbar navbar-expand-sm">
          <div className="container-fluid">
            <NavLink to="/" id="main">
              <img src={Logo} alt="Logo Eva Nagengast"></img>
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon">
                <RxHamburgerMenu />
              </span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ">
                <li className="nav-item">
                  <NavLink to="/" className="nav-link">
                    <span
                      data-bs-toggle="collapse"
                      data-bs-target="#navbarSupportedContent"
                      aria-controls="navbarSupportedContent"
                    >
                      Home
                    </span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/aboutme" className="nav-link">
                    <span
                      data-bs-toggle="collapse"
                      data-bs-target="#navbarSupportedContent"
                      aria-controls="navbarSupportedContent"
                    >
                      About
                    </span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/contact" className="nav-link">
                    Contact
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/projects" className="nav-link">
                    <span
                      data-bs-toggle="collapse"
                      data-bs-target="#navbarSupportedContent"
                      aria-controls="navbarSupportedContent"
                    >
                      Projects
                    </span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/cv" className="mb-2 mb-sm-0 nav-link navbutton">
                    <span
                      data-bs-toggle="collapse"
                      data-bs-target="#navbarSupportedContent"
                      aria-controls="navbarSupportedContent"
                    >
                      Resume
                    </span>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {routes}
      </Router>
    </div>
  );
}
