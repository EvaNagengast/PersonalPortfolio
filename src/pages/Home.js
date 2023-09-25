import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useAnimation, useInView } from "framer-motion";

import Footer from "./Footer";
import Profilepic from "../media/profilepic.png";
import ProjectOneImg from "../media/projectOne.png";
import ProjectTwoImg from "../media/projectTwo.png";
import ProjectThreeImg from "../media/ProjectThree.png";
import ProjectFourImg from "../media/ProjectFour.png";
import "./Home.css";

export default function Homepage() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);
  let navigate = useNavigate();

  let handleClick = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="Home">
      <div className="homepage">
        <div className="hero">
          <h1>Eva Nagengast</h1>
          <motion.div
            variants={{
              noshow: { opacity: 0, y: 100 },
              show: { opacity: 1, y: 0 },
            }}
            initial="noshow"
            animate="show"
            transition={{ duration: 2, delay: 1 }}
            className="subheader"
          >
            <h2>Aspiring Front-End Developer</h2>
            <h3>based in London</h3>
            <button
              onClick={() => {
                navigate("./Cv");
              }}
            >
              let's connect
            </button>
            <button onClick={() => handleClick()}>explore my page</button>
          </motion.div>
        </div>
        <main>
          <div className="aboutsection" id="about-one" ref={ref}>
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
              <div className="col-9  abouttext" id="about">
                <div>
                  <p>
                    Hi, I'm Eva! <br />I love designing and developing
                    beautiful, eye catching and responsive websites. Have fun
                    exploring my page or learn more
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
                  <span className="colortwo">Mail</span>
                  <span className="colorone">,</span>
                  <span className="colortwo"> LinkedIn</span>
                  <span className="colorone">,</span>
                  <span className="colortwo"> GitHub</span>
                  <span className="colorone">{"}"}</span>
                  <br />
                  <span className="colorthree"> show(CV) </span>
                  <span className="colorone">{"{"}</span>
                  <span className="colortwo">EvaNagengast.pdf</span>
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
                  <span className="colortwo"> "JavaScript"</span>
                  <span className="colorone">,</span>
                  <span className="colortwo"> "GitHub"</span>
                  <span className="colorone">]</span>
                </div>
              </div>
            </div>
          </div>
          <div className="projectsection pt-5">
            <h4 className="pt-4 pb-2">Projects</h4>
            <p className="projectIntro">
              Browse through some assorted projects I created or find all of my
              projects{" "}
              <button
                onClick={() => {
                  navigate("/projects");
                }}
              >
                here
              </button>
            </p>
            <div>
              <div className="projectOne negativeMargin row ">
                <div className="col-6">
                  <img
                    src={ProjectOneImg}
                    alt="project example"
                    className="img-fluid projectImageright"
                  />
                </div>
                <div className="col-6 text-start projectTextright">
                  <h5>London Music Journey</h5>
                  <p>
                    Explore London through a musical journey - this web page
                    combines embedded songs and maps, with grid layouts and
                    responsive media queries. I illustrated the London
                    Underground-themed icons to enhance the user experience and
                    to spawn a connection with this beautiful city.
                    <div className="projectTools">
                      Built with HTML, CSS, Java, Embeds, Bootstrap
                      <a href="/">find out more</a>
                    </div>
                  </p>
                  <br />
                </div>
              </div>
              <div className="projectTwo negativeMargin row">
                <div className="col-6 text-end projectTextleft ">
                  <h5>Dictionary</h5>
                  <p>
                    Built using React and enhanced with the capabilities of APIs
                    and npm libraries, this page offers word definitions and
                    related images for a search term. It becomes fun and
                    engaging as the play button talks to the user with a simple
                    click. Behind the scenes, I employed loops and React's
                    mapping capabilities to seamlessly fetch and present the
                    data
                    <div className="projectTools">
                      {" "}
                      Built with HTML, CSS, JSReact,APIs & npm Libraries
                      <a href="/">find out more</a>
                    </div>
                  </p>
                </div>
                <div className="col-6">
                  {" "}
                  <img
                    src={ProjectTwoImg}
                    alt="project example "
                    className="img-fluid projectImageleft"
                  />
                </div>
              </div>
              <div className="projectThree negativeMargin row">
                <div className="col-6">
                  {" "}
                  <img
                    src={ProjectThreeImg}
                    alt="project example"
                    className="img-fluid projectImageright"
                  />
                </div>
                <div className="col-6 text-start projectTextright">
                  <h5>Pigeon Showcase</h5>
                  <p>
                    From a concept to web reality, this Pigeon Showcase was
                    carefully crafted using Bootstrap, media queries, and
                    flexboxfor a responsive and visually appealing website.
                    Originally conceived as a model showcase, I carefully and
                    accurately translated the Figma design into a unique
                    appreciation of pigeons, all while paying close attention to
                    SEO to improve its online visibility
                    <div className="projectTools">
                      Built with HTML, CSS, JavaScript & Figma
                      <a href="/">find out more</a>
                    </div>
                  </p>
                </div>
              </div>
              <div className="projectFour negativeMargin row">
                <div className="col-6 text-end projectTextleft">
                  <h5>World Clock</h5>
                  <p className>
                    With this World Clock App, users can effortlessly explore
                    global time zones. This app uses HTML, CSS, and JavaScript
                    and seamless API integration, to efficiently retrieves and
                    display precise city times from all around the world. It's
                    designed to be user-friendly and intuitive for a smooth
                    experience.
                    <div className="projectTools">
                      Built with HTML, CSS, JavaScript & APIs
                      <a href="/">find out more</a>
                    </div>
                  </p>
                </div>
                <div className="col-6 ">
                  <img
                    src={ProjectFourImg}
                    alt="project example"
                    className="img-fluid projectImageleft"
                  />
                </div>
              </div>
            </div>
            ccc
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
