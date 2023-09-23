import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import Home from "./Home"
import Homepage from "./Homepage";
import AboutMe from "./Aboutme";
import Contact from "./Contact";
import Projects from "./Projects";
import Cv from "./Cv";
import Error from "./Error";import Logo from "../media/smalllogo.png";
import "./Navbar.css";


export default function Navbar() {
  let routes = (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/homepage" element={<Homepage />} />
      <Route path="/aboutme" element={<AboutMe />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/cv" element={<Cv />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );

  return (
    <div className="Navbar">
      <Router>
        <nav className="navigation">
          <NavLink to="/" id="main">
            <img src={Logo} alt="logo"></img>
          </NavLink>
          <NavLink to="/" id="main">
            Home
          </NavLink>
          <NavLink to="/aboutme">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/homepage">Home2</NavLink>
          <button>
            <NavLink to="/cv">Resume</NavLink>
          </button>
        </nav>
        {routes}
      </Router>
    </div>
  );
}
