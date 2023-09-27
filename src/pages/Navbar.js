import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
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
        <nav className="navigation">
          <NavLink to="/" id="main">
            <img src={Logo} alt="Logo Eva Nagengast" className=" d-none d-sm-inline-block" />
          </NavLink>
          <NavLink to="/" id="main">
            HOME
          </NavLink>
          <NavLink to="/aboutme">ABOUT</NavLink>
          <NavLink to="/contact">CONTACT</NavLink>
          <NavLink to="/projects">PROJECTS</NavLink>

          <NavLink to="/cv" className="navbutton">
            RESUME
          </NavLink>
        </nav>
        {routes}
      </Router>
    </div>
  );
}
