import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Homepage from "./pages/Homepage";
import AboutMe from "./pages/Aboutme";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Error from "./pages/Error";
import "./App.css";

export default function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        {""} 
        <Link to="/aboutme" className="red">AboutMe</Link>
        {""} 
        <Link to="/contact">Contact</Link>
        {""} 
        <Link to="/projects">Projects</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <footer>hello this is a footer</footer>
    </Router>
  );
}
