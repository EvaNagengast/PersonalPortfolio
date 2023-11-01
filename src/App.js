import React, { useEffect } from "react";
import Navbar from "./pages/Navbar";
import { useLocation } from "react-router-dom";
import "./App.css";

export default function App() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <div className="App">
      <Navbar />
    </div>
  );
}
