import React from "react";
import { useNavigate } from "react-router-dom";
import "./Contactsection.css";

export default function Contactsection() {
  let navigate = useNavigate();
  return (
    <div className="Contactsection p-2 p-sm-4">
      <div className="contactsectionbox">
        <h4> Contact me</h4>
        <button
          onClick={() => {
            navigate("./contact");
          }}
          className="btn-base-light"
        >
          click here to say hello
        </button>
      </div>
    </div>
  );
}
