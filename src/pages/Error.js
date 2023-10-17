import React from "react";
import "./Error.css";
export default function Error() {
  return (
    <div className="Error">
      <h1> oh no!</h1>
      <p>This page does not exist, go back to</p>
      <a
        href="http://www.eva-nagengast.com"
        alt="go back to Eva Nagengasts Homepage"
      >
        eva-nagengast.com
      </a>
    </div>
  );
}
