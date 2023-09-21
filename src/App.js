import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Homepage from "./pages/Homepage";
import AboutMe from "./pages/Aboutme";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Cv from "./pages/Cv";
import Footer from "./pages/Footer";
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
          <nav>
            <Link to="/" id="main">
              Home
            </Link>
            <Link to="/aboutme" className="red">
              AboutMe
            </Link>
            <Link to="/contact" >
              Contact
            </Link>
            <Link to="/projects">Projects</Link>
          </nav>
          {routes}
        </Router>
        <Footer />
      </div>
    );
  }




