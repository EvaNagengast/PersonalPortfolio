import React from "react";
import Footer from "./Footer";
import Mailsection from "./subpage/Mailsection";
import { LuGithub, LuMailbox, LuFileHeart } from "react-icons/lu";
import { PiLinkedinLogo } from "react-icons/pi";

import "./Contact.css";

export default function Contact() {
  return (
    <div className="Contact">
      <div className="contactpage">
        <h1>Contact me!</h1>
        <div className="row">
          <div className="col-5">
            <div className="contactbox">
              <ul>
                <li></li>
                <li>
                  <span className="highlight">
                    <LuMailbox /> MAIL
                  </span>
                  eva.nagengast.dev@gmail.com
                </li>
                <li>
                  <span className="highlight">
                    <PiLinkedinLogo /> LINKEDIN
                  </span>
                  linkedin.com/in/evanagengast/{" "}
                </li>
                <li>
                  <span className="highlight">
                    <LuGithub /> GITHUB
                  </span>
                  github.com/EvaNagengast
                </li>

                <li>
                  <span className="highlight">
                    <LuFileHeart /> CV
                  </span>
                  click here to see or download my CV
                </li>
              </ul>
            </div>
          </div>
          <div className="col-7">
            <Mailsection />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
