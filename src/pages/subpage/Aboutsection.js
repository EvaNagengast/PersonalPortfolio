import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Profilepic from "../../media/profilepic2.png";
import pdf from "../../media/EvaNagengastResume.pdf";
import { motion, useAnimation, useInView } from "framer-motion";
import "./Aboutsection.css";

export default function Aboutsection() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);
  let navigate = useNavigate();
  return (
    <div className="Aboutsection" ref={ref}>
      <div className="aboutbox">
        <div className="row">
          <div className="col-3">
            <motion.img
              src={Profilepic}
              variants={{
                hidden: { opacity: 0, x: -70 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 1.5, delay: 0.5 }}
              alt="profile"
              className="profilepicture"
            ></motion.img>
          </div>
          <div className="col-9  abouttext">
            <div>
              <p>
                Hi, I'm Eva! <br />I love designing and developing beautiful,
                eye catching and responsive websites. Have fun exploring my page
                or learn more
                <button
                  onClick={() => {
                    navigate("./aboutme");
                  }}
                >
                  about me
                </button>
              </p>
            </div>

            <div className="codeimage text-start ">
              <span className="colorthree">.location: </span>
              <span className="colorone">{"{"}</span>
              <span className="colortwo">London</span>
              <span className="colorone">{"}"}</span>
              <br />
              <span className="colorthree"> onClick(contact) </span>
              <span className="colorone">{"{"}</span>
              <a
                className="text-decoration-none"
                href="mailto:eva.nagengast.dev@gmail.com"
                target="_blank"
                rel="noreferrer"
                alt="Click to write a Mail"
              >
                <span className="colortwo ">Mail</span>
              </a>
              <span className="colorone">,</span>
              <a
                href="https://www.linkedin.com/in/evanagengast/"
                target="_blank"
                rel="noreferrer"
                alt="Evas LinkedIn page"
                className="text-decoration-none"
              >
                <span className="colortwo "> LinkedIn </span>
              </a>
              <span className="colorone">,</span>
              <a
                href="https://github.com/EvaNagengast"
                target="_blank"
                rel="noreferrer"
                alt="Evas Github Profile"
                className="text-decoration-none"
              >
                <span className="colortwo "> GitHub </span>
              </a>
              <span className="colorone">{"}"}</span>
              <br />
              <span className="colorthree"> show(CV) </span>
              <span className="colorone">{"{"}</span>
              <a
                href={pdf}
                target="_blank"
                rel="noreferrer"
                alt="PDF of Evas Resume"
                className="text-decoration-none"
              >
                <span className="colortwo">EvaNagengast.pdf</span>
              </a>

              <span className="colorone">{"}"}</span>
              <br />
              <span className="colorthree"> likes = </span>
              <span className="colorone">[</span>
              <span className="colortwo">”Coding"</span>
              <span className="colorone">,</span>
              <span className="colortwo"> "Music"</span>
              <span className="colorone">,</span>
              <span className="colortwo"> "Squirrels"</span>
              <span className="colorone">,</span>
              <span className="colortwo"> "Crafts"</span>
              <span className="colorone">]</span>
              <br />
              <span className="colorthree">skills = </span>
              <span className="colorone">[</span>
              <span className="colortwo">"HTML"</span>
              <span className="colorone">&&</span>
              <span className="colortwo">"CSS"</span>
              <span className="colorone">,</span>
              <span className="colortwo"> "React.JS"</span>
              <span className="colorone">,</span>
              <br />
              <span className="colortwo ps-5"> "JavaScript"</span>
              <span className="colorone">,</span>
              <span className="colortwo"> "GitHub"</span>
              <span className="colorone">]</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
