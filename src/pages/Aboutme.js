import React from "react";
import { useNavigate } from "react-router-dom";

export default function Aboume() {
  let navigate = useNavigate(); 
  return (
    <div>
      aboutme
      <br /> see my projects{" "}
      <button
        onClick={() => {
          navigate("../projects");
        }}
      >hherer</button>
    </div>
  );
}
