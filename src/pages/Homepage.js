import React from "react";
import { useNavigate } from "react-router-dom";

export default function Homepage() {
  let navigate = useNavigate();
  return (
    <div>
      homememememe
      <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />{" "}
      <br /> <br /> <br /> <br />
      <button
        onClick={() => {
          navigate("../Cv");
        }}
      >
        Work experience
      </button>
    </div>
  );
}
