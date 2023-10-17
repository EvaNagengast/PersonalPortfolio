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
        <div className="row m-auto ms-2 me-2">
          <div className="col-12  col-lg-7 col-xl-6">
            <div
              className="contactbox m-0
            "
            >
              <li>
                <a
                  className="text-decoration-none"
                  href="mailto:eva.nagengast.dev@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  alt="Click to write a Mail"
                >
                  <span className="highlight pe-3">
                    <LuMailbox /> MAIL
                  </span>
                  <br className="d-block d-sm-none" />
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
                  <span className="highlight pe-3">
                    <PiLinkedinLogo /> LINKEDIN
                  </span>
                  <br className="d-block d-sm-none" />
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
                  <span className="highlight pe-3">
                    <LuGithub /> GITHUB
                  </span>{" "}
                  <br className="d-block d-sm-none" />
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
                >
                  {" "}
                  <span className="highlight pe-3">
                    <LuFileHeart /> CV
                  </span>{" "}
                  <br className="d-block d-sm-none" />
                 see
                  or download my CV
                </a>
              </li>
            </div>
          </div>
          <div className=" col-12  col-lg-5 col-xl-6 p-0 ps-md-3 ps-lg-0">
            <Mailsection />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
