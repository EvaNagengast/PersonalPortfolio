import React from "react";
import { LuGithub, LuMailbox, LuFileHeart } from "react-icons/lu";
import { PiLinkedinLogo } from "react-icons/pi";
import pdf from "../media/EvaNagengastResume.pdf";
import Footer from "./Footer";
import Mailsection from "./subpage/Mailsection";

import "./Contact.css";

export default function Contact() {
  return (
    <div className="Contact">
      <div className="contactpage">
        <h1>Contact me!</h1>
        <div className="row">
          <div className="col-5">
            <div className="contactbox">
              
                <li>
                  <a
                    className="text-decoration-none"
                    href="mailto:eva.nagengast.dev@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                    alt="Click to write a Mail"
                  >
                    <span className="highlight">
                      <LuMailbox /> MAIL
                    </span>
                    eva.nagengast.dev@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/evanagengast/"
                    target="_blank"
                    rel="noreferrer"
                    alt="Evas LinkedIn page"
                    className="text-decoration-none"
                  >
                    <span className="highlight">
                      <PiLinkedinLogo /> LINKEDIN
                    </span>
                    linkedin.com/in/evanagengast/
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/EvaNagengast"
                    target="_blank"
                    rel="noreferrer"
                    alt="Evas Github Profile"
                    className="text-decoration-none"
                  >
                    <span className="highlight">
                      <LuGithub /> GITHUB
                    </span>
                    github.com/EvaNagengast
                  </a>
                </li>

                <li>
                  <a
                    href={pdf}
                    target="_blank"
                    rel="noreferrer"
                    alt="PDF of Evas Resume"
                    className="text-decoration-none"
                  > <span className="highlight">
                    <LuFileHeart /> CV
                  </span>
                  click here to see or download my CV</a>
                 
                </li>
             
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
