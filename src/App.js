import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import Homepage from "./pages/Homepage";
import AboutMe from "./pages/Aboutme";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Cv from "./pages/Cv";

import Error from "./pages/Error";

import "./App.css";

export default function App() {
  let routes = (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/aboutme" element={<AboutMe />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/cv" element={<Cv />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );

  return (
    <div className="App">
      <Router>
        <nav id="navbar">
          <NavLink to="/" id="main">
            Home
          </NavLink>
          <NavLink to="/aboutme">AboutMe</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/projects" className="red">
            Projects
          </NavLink>
        </nav>
        {routes}
      </Router>
   
    </div>
  );
}
