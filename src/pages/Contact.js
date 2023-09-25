import React from "react";
import Footer from "./Footer";
import { LuGithub, LuMailbox } from "react-icons/lu";
import { PiLinkedinLogo } from "react-icons/pi";

import "./Contact.css";
export default function Contact() {
  return (
    <div className="Contact">
      <div className="contactpage">
        <h1>Contact me!</h1>
        <div className="contactbox">
          <ul>
            <li></li>
            <li>
              <LuMailbox /> Email - eva.nagengast.dev@gmail.com{" "}
            </li>
            <li>
              <PiLinkedinLogo />
              Linkedin - linkedin.com/in/evanagengast/{" "}
            </li>
            <li>
              <LuGithub />
              GitHub - https://github.com/EvaNagengast
            </li>
            <li>CV - click here to see or download my CV</li>
          </ul>
        </div>
        <div className="contactmail">
          
        </div>
      </div>
      <Footer />
    </div>
  );
}
