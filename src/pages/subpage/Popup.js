import React from "react";
import "./Popup.css";

export default function Popup(props) {
  return props.trigger ? (
    <div className="Popup">
      <div className="popup-inner">
        this is a popup text
        <button className="close-btn" onClick={() => props.setTrigger(false)}>
          close popup button
        </button>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
}
