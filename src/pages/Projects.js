import React, { useState } from "react";
import { PiFileHtml, PiFileCss, PiFileJs } from "react-icons/pi";
import { SiReact } from "react-icons/si";
import { RiBootstrapLine } from "react-icons/ri";
import { LuLibrary, LuCode } from "react-icons/lu";
//
import Popup from "./subpage/Popup";
import Footer from "./Footer";
import Dictionary from "../media/webdictionary.png";
import London from "../media/weblondon.png";
import Magic from "../media/webmagigweather.png";
import Pigeons from "../media/webpigeons.png";
import Weather from "../media/webweather.png";
import Clock from "../media/webworldclock.png";
import XLclock from "../media/xlclock.png";
import XLdictionary from "../media/xldictionary.png";
import XLlondon from "../media/xllondon.png";
import XLmagic from "../media/xlmagic.png";
import XLpigeons from "../media/xlpigeons.png";
import XLweather from "../media/xlweather.png";

import "./Projects.css";

export default function Projects() {
  let [popupOne, setPopupOne] = useState(false);
  let [popupTwo, setPopupTwo] = useState(false);
  let [popupThree, setPopupThree] = useState(false);
  let [popupFour, setPopupFour] = useState(false);
  let [popupFive, setPopupFive] = useState(false);
  let [popupSix, setPopupSix] = useState(false);
  return (
    <div className="Projects">
      <div className="text-center projectspage">
        <h1 className="text-start">Projects</h1>

        <div className="row m-auto px-3 ">
          <div className="col-sm-6 col-lg-4">
            <div className="card">
              <img
                className="card-img-top"
                src={London}
                alt="Musical London Journey"
              />
              <div className="card-body">
                <p className="cardText">
                  London Music <br className="d-block d-lg-none" />
                  Journey
                </p>
                <p className="cardicon">
                  <PiFileHtml /> <PiFileCss /> <PiFileJs /> <LuCode />
                </p>
                <a
                  href="https://bucolic-faun-a689bb.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                  alt="Musical Journey through London Webpage"
                  className="btn-base-dark text-decoration-none visitButton"
                >
                  visit page
                </a>
                <button
                  onClick={() => setPopupOne(true)}
                  className="btn-base-dark popupButton"
                >
                  learn more
                </button>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4 ">
            <div className="card">
              <img
                className="card-img-top"
                src={Dictionary}
                alt="Dictionary App"
              />
              <div className="card-body">
                <p className="cardText">
                  Dictionary <br className="d-block d-lg-none" />
                  App
                </p>
                <p className="cardicon">
                  <PiFileHtml /> <PiFileCss /> <PiFileJs /> <SiReact />{" "}
                  <RiBootstrapLine /> <LuLibrary />
                </p>
                <a
                  href="https://evas-dictionary.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                  alt="Dictionary Application"
                  className="btn-base-dark text-decoration-none visitButton"
                >
                  visit page
                </a>
                <button
                  onClick={() => setPopupTwo(true)}
                  className="btn-base-dark popupButton"
                >
                  learn more
                </button>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4 ">
            <div className="card">
              <img
                className="card-img-top"
                src={Pigeons}
                alt="Pigeon Showcase"
              />
              <div className="card-body">
                <p className="cardText">
                  Pigeon <br className="d-block d-lg-none" />
                  Showcase
                </p>
                <p className="cardicon">
                  <PiFileHtml /> <PiFileCss /> <PiFileJs /> <RiBootstrapLine />
                </p>
                <a
                  href="https://heartfelt-mermaid-f746f4.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                  alt="Pigeon Showcase Webpage"
                  className="text-decoration-none btn-base-dark visitButton"
                >
                  visit page
                </a>
                <button
                  onClick={() => setPopupThree(true)}
                  className="btn-base-dark popupButton"
                >
                  learn more
                </button>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4 d-block d-lg-none ">
            <div className="card">
              <img
                className="card-img-top"
                src={Magic}
                alt="Magical Weather App"
              />
              <div className="card-body">
                <p className="cardText">
                  Magical <br className="d-block d-lg-none" />
                  Weather App
                </p>
                <p className="cardicon">
                  <PiFileHtml /> <PiFileCss /> <PiFileJs /> <SiReact />{" "}
                  <RiBootstrapLine />
                </p>
                <a
                  href="https://steady-crepe-0282c0.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                  alt="Magical Weather Application"
                  className="btn-base-dark text-decoration-none visitButton"
                >
                  visit page
                </a>
                <button
                  onClick={() => setPopupFour(true)}
                  className="btn-base-dark popupButton"
                >
                  learn more
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row m-auto px-3">
          <div className="col-sm-6 col-lg-4 d-none d-lg-block">
            <div className="card">
              <img
                className="card-img-top"
                src={Magic}
                alt="Magical Weather App"
              />
              <div className="card-body">
                <p className="cardText">
                  Magical <br className="d-block d-lg-none" />
                  Weather App
                </p>
                <p className="cardicon">
                  <PiFileHtml /> <PiFileCss /> <PiFileJs /> <SiReact />{" "}
                  <RiBootstrapLine />
                </p>
                <a
                  href="https://steady-crepe-0282c0.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                  alt="Magical Weather Application"
                  className="btn-base-dark text-decoration-none visitButton "
                >
                  visit page
                </a>
                <button
                  onClick={() => setPopupFour(true)}
                  className="btn-base-dark popupButton"
                >
                  learn more
                </button>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4 ">
            <div className="card">
              <img className="card-img-top" src={Weather} alt="Weather App" />
              <div className="card-body">
                <p className="cardText">
                  Weather <br className="d-block d-lg-none" />
                  App
                </p>
                <p className="cardicon">
                  <PiFileHtml /> <PiFileCss /> <PiFileJs /> <RiBootstrapLine />
                </p>
                <a
                  href="https://eva-weather-app-1.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                  alt="Weather Application"
                  className="visitButton text-decoration-none btn-base-dark"
                >
                  visit page
                </a>
                <button
                  onClick={() => setPopupFive(true)}
                  className="popupButton btn-base-dark"
                >
                  learn more
                </button>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4 ">
            <div className="card">
              <img className="card-img-top" src={Clock} alt="World Clock" />
              <div className="card-body">
                <p className="cardText">
                  World
                  <br className="d-block d-lg-none" /> Clock
                </p>
                <p className="cardicon">
                  <PiFileHtml /> <PiFileCss /> <PiFileJs /> <RiBootstrapLine />
                  <LuLibrary />
                </p>
                <a
                  href="https://evas-world-clock.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                  alt="World Clock Webpage"
                  className="btn-base-dark text-decoration-none visitButton"
                >
                  visit page
                </a>
                <button
                  onClick={() => setPopupSix(true)}
                  className="btn-base-dark popupButton"
                >
                  learn more
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <div className="popups">
        <Popup trigger={popupOne} setTrigger={setPopupOne}>
          <div className="row">
            <div className="col-5 d-none d-lg-block">
              <img
                src={XLlondon}
                className="xlimage"
                alt="webpage about london"
              />
            </div>
            <div className="col col-lg-7 m-4 m-lg-0 ">
              <h2>Musical Journey through London</h2>
              <div className="popupText">
                <div className="text-decoration-underline popuphighlight">
                  Objective:
                </div>
                Learn how to use embeds, grids, and tables effectively. <br />
                <div className="mt-2 text-decoration-underline popuphighlight">
                  Achieved:
                </div>
                My favourite project so far, this page was a joy to develop and
                a fun exploration of London's music culture. I spent hours
                listening to songs named after London streets and boroughs while
                designing and curating the content. I illustrated playful
                elements like the "Way Out" button, and a moving TfL-Ticket
                after a 1991 travel card. It also features embeds, grids, and
                tables, all seamlessly rendered responsive with the use of media
                queries.
                <a
                  href="https://bucolic-faun-a689bb.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                  alt="Website for Musical Journey"
                  className="text-decoration-none btn-base-light launchbutton"
                >
                  LAUNCH MUSICAL JOURNEY
                </a>
              </div>
            </div>
          </div>
        </Popup>
        <Popup trigger={popupTwo} setTrigger={setPopupTwo}>
          <div className="row">
            <div className="col-5 d-none d-lg-block">
              <img
                src={XLdictionary}
                className="xlimage"
                alt="dictionary webpage"
              />
            </div>
            <div className="col col-lg-7 m-4 m-lg-0 ">
              <h2>Dictionary App</h2>
              <div className="popupText">
                <div className="text-decoration-underline popuphighlight">
                  Objective:
                </div>{" "}
                Deepen knowledge about React.js, looping, mapping through
                objects, and utilising APIs and npm libraries. <br />
                <div className="mt-2 text-decoration-underline popuphighlight">
                  Achieved:
                </div>
                This project helped me to expand my expertise in React.js,
                focusing on looping and mapping through objects. It involved the
                creation of a dictionary app, rich with features like images
                related to the search term and an animated play buttons that
                talks to the user. The development process was a fun and
                educational journey, helping me to experiment with various npm
                libraries and to dive deeper into the functionality of React.
                <a
                  href="https://evas-dictionary.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                  alt="Website for Dictionary Application"
                  className="text-decoration-none btn-base-light launchbutton"
                >
                  LAUNCH DICTIONARY
                </a>
              </div>
            </div>
          </div>
        </Popup>
        <Popup trigger={popupThree} setTrigger={setPopupThree}>
          <div className="row">
            <div className="col-5 d-none d-lg-block">
              <img
                src={XLpigeons}
                className="xlimage"
                alt="webpage about pigeons"
              />
            </div>
            <div className="col col-lg-7 m-4 m-lg-0 ">
              <h2>Pigeon Showcase</h2>
              <div className="popupText ">
                <div className="text-decoration-underline popuphighlight">
                  Objective:
                </div>{" "}
                I aimed to create a website that closely resembled a Figma
                design, incorporating grids and ensuring responsiveness. <br />
                <div className="mt-2 text-decoration-underline popuphighlight">
                  Achieved:
                </div>
                This project challenged me to dive into the world of responsive
                design. I recreated a webpage based on a Figma design, striving
                to stay as close to the original as possible while personalising
                the content as a tribute to pigeons. Using a combination of
                Bootstrap and media queries, I ensured that the site stays
                responsive and beautiful across all devices.
                <a
                  href="https://heartfelt-mermaid-f746f4.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                  alt="Webpage for Pigeon Showcase"
                  className="text-decoration-none btn-base-light launchbutton"
                >
                  lAUNCH PIGEON SHOWCASE
                </a>
                <a
                  href="   https://www.figma.com/file/75qiS02LnC22SnhSeHxgZZ/Untitled?type=design&node-id=0%3A1&mode=design&t=38NHFtYczyVb1fMB-1"
                  target="_blank"
                  rel="noreferrer"
                  alt="Figma Design for Model Showcase"
                  className="text-decoration-none btn-base-light launchbutton"
                >
                  Find Original Design Reference
                </a>
              </div>
            </div>
          </div>
        </Popup>
        <Popup trigger={popupFour} setTrigger={setPopupFour}>
          <div className="row">
            <div className="col-5 d-none d-lg-block">
              <img
                src={XLmagic}
                className="xlimage"
                alt="weather application"
              />
            </div>
            <div className="col col-lg-7 m-4 m-lg-0 ">
              <h2>
                Magic <br />
                Weather App
              </h2>
              <div className="popupText">
                <div className="text-decoration-underline popuphighlight">
                  Objective:
                </div>
                Learn to use React.js and implement multiple components
                <br />{" "}
                <div className="mt-2 text-decoration-underline popuphighlight">
                  {" "}
                  Achieved:
                </div>
                As my first React project I built a second Weather Application.
                Learning to use React was a steep learning curve. Very quickly I
                enjoyed building all the components and putting them together
                like a Puzzle. To add a unique touch and because autumn is near,
                I created individual Tarot-themed weather icons.
                <a
                  href="https://steady-crepe-0282c0.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                  alt="Website for Weather Application"
                  className="text-decoration-none btn-base-light launchbutton"
                >
                  LAUNCH MAGIC WEATHER
                </a>
              </div>
            </div>
          </div>
        </Popup>
        <Popup trigger={popupFive} setTrigger={setPopupFive}>
          <div className="row">
            <div className="col-5 d-none d-lg-block">
              <img
                src={XLweather}
                className="xlimage"
                alt="weather application"
              />
            </div>
            <div className="col col-lg-7 m-4 m-lg-0 ">
              <h2>Weather App</h2>
              <div className="popupText">
                <div className="text-decoration-underline popuphighlight">
                  {" "}
                  Objective:
                </div>{" "}
                Build a functioning application, learn how to implement APIs and
                make a responsive website using Bootstrap.
                <div className="mt-2 text-decoration-underline popuphighlight">
                  <br />
                  Achieved:
                </div>
                Building upon my previously-gained knowledge I constructed a
                Weather App. This project helped me to learn how to integrate
                and understand APIs, real-life development workflows, hosting,
                and to gain a deeper understanding of JavaScript. The App allows
                users to easily access up-to-date weather conditions and
                forecasts for locations all around the world. I had lots of fun
                styling the website with a Californian vibe in mind.
                <a
                  href="https://eva-weather-app-1.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                  alt="Website for Weather Application"
                  className="text-decoration-none btn-base-light launchbutton"
                >
                  LAUNCH WEATHER APP
                </a>
              </div>
            </div>
          </div>
        </Popup>
        <Popup trigger={popupSix} setTrigger={setPopupSix}>
          <div className="row">
            <div className="col-5 d-none d-lg-block">
              <img src={XLclock} className="xlimage" alt="worldclock app" />
            </div>
            <div className="col col-lg-7 m-4 m-lg-0 ">
              <h2>World Clock</h2>
              <div className="popupText">
                <div className="text-decoration-underline popuphighlight">
                  {" "}
                  Objective:
                </div>{" "}
                Gain more experience with APIs, and especially handling and
                processing local times. <br />
                <div className="mt-2 text-decoration-underline popuphighlight">
                  Achieved:
                </div>
                My second big project was the development of a JavaScript World
                Clock App, also built using Bootstrap. This project helped me to
                deepen my API knowledge and refine my development skills.
                Implementing the time first seemed very hard, but I loved
                reading about calculations around UTC, how to work with it and
                to solve challenges creatively. I animated an indicator to show
                the seconds and move around the main spplication like a clock.
                <a
                  href="https://evas-world-clock.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                  alt="Website for World Clock"
                  className="launchbutton text-decoration-none btn-base-light "
                >
                  LAUNCH WORLD CLOCK APP
                </a>
              </div>
            </div>
          </div>
        </Popup>
      </div>
    </div>
  );
}
