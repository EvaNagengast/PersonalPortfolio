import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
    <div className="container">
      <nav>
        <a href="/">Home</a>
        {""}
        <a href="/aboutme" className="red">
          AboutMe
        </a>
        {""}
        <a href="/contact">Contact</a>
        {""}
        <a href="/projects">Projects</a>
      </nav>
      <Router>{routes}</Router> <Footer />
    </div>
  );
}
