import React, { useState } from "react";
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
      <div className="projectspage">
        <h1>Projects</h1>
        <img></img>
        <div className="row ">
          <div className="col-4  ">
            <div class="card">
              <img class="card-img-top" src={London} alt="Card   cap" />
              <div class="card-body">
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>{" "}
                <button onClick={() => setPopupOne(true)}>learn more</button>
              </div>
            </div>
          </div>
          <div className="col-4 ">
            <div class="card">
              <img class="card-img-top" src={Dictionary} alt="Card   cap" />
              <div class="card-body">
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <button onClick={() => setPopupTwo(true)}>learn more</button>
              </div>
            </div>
          </div>
          <div className="col-4 ">
            <div class="card">
              <img class="card-img-top" src={Pigeons} alt="Card   cap" />
              <div class="card-body">
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <button onClick={() => setPopupThree(true)}>learn more</button>
              </div>
            </div>
          </div>
        </div>
        <div className="row ">
          <div className="col-4  ">
            <div class="card">
              <img class="card-img-top" src={Magic} alt="Card   cap" />
              <div class="card-body">
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>{" "}
                <button onClick={() => setPopupFour(true)}>learn more</button>
              </div>
            </div>
          </div>
          <div className="col-4 ">
            <div class="card">
              <img class="card-img-top" src={Weather} alt="Card   cap" />
              <div class="card-body">
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <button onClick={() => setPopupFive(true)}>learn more</button>
              </div>
            </div>
          </div>
          <div className="col-4 ">
            <div class="card">
              <img class="card-img-top" src={Clock} alt="Card   cap" />
              <div class="card-body">
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <button onClick={() => setPopupSix(true)}>learn more</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <Popup trigger={popupOne} setTrigger={setPopupOne}>
        <div className="row">
          <div className="col-5">
            <img
              src={XLlondon}
              className="xlimage"
              alt="webpage about london"
            />
          </div>
          <div className="col-7">
            <p>
            <u>Objective:</u>  Learn how to use embeds, grids, and tables effectively.
        <u>Achieved:</u>My favourite project so far, this page was a joy to develop and a fun exploration of London's music
              culture. I spent hours listening to songs songs named after
              London streets and boroughs while designing and curating the content.
              I illustrated playful elements like the "way out" button and a moving
              TfL-Ticket, after a 1991 travel card. It
              also features embeds, grids, and tables, all seamlessly rendered
              responsive with the use of media queries.
              <button>LAUNCH MUSICAL JOURNEY </button>
            </p>
          </div>
        </div>
      </Popup>
      <Popup trigger={popupTwo} setTrigger={setPopupTwo}>
        <div className="row">
          <div className="col-5">
            <img
              src={XLdictionary}
              className="xlimage"
              alt="dictionary webpage"
            />
          </div>
          <div className="col-7">
            <p>
              <u>Objective:</u> Deepen knowledge about React, looping, mapping through
              objects, and utilizing APIs with npm libraries. <u>Achieved:</u> This
              project helped me to expand my expertise in React,
              focusing on looping and mapping through objects. It involved the
              creation of a dictionary app, rich with features like an animated
              play buttons that talks to the user. The development process was
              a fun and educational journey, helping me to experiment with
              various npm libraries and practice my React skills.
              <button>LAUNCH DICTIONARY</button>
            </p>
          </div>
        </div>
      </Popup>
      <Popup trigger={popupThree} setTrigger={setPopupThree}>
        <div className="row">
          <div className="col-5">
            <img
              src={XLpigeons}
              className="xlimage"
              alt="webpage about pigeons"
            />
          </div>
          <div className="col-7">
            <p>
              <u>Objective:</u> I aimed to create a website that closely
              resembled a Figma design, incorporating grids and ensuring
              responsiveness. <u>Achieved:</u> This project challenged me to
              dive into the world of responsive design. I recreated a webpage
              based on a Figma design, striving to stay as close to the original
              as possible while personalizing the content as a tribute to
              pigeons. Using a combination of Bootstrap and media queries, I
              ensured that the site stays responsive and beautiful across all
              devices.
              <button>lAUNCH PIGEON SHOWCASE</button>
            </p>
          </div>
        </div>
      </Popup>
      <Popup trigger={popupFour} setTrigger={setPopupFour}>
        <div className="row">
          <div className="col-5">
            <img src={XLmagic} className="xlimage" alt="weather application" />
          </div>
          <div className="col-7">
            <p>
              Planned: Learn to use React and implement multiple components
              Achieved: As my first React project I built a second Weather app.
              Learning to use React was a steep learning curve. Very quickly I
              enjoyed building all the components and putting them together like
              a Puzzle. To add a unique touch and because autumn is near, I
              created individual Tarot-themed weather icons.
              <button>LAUNCH MAGIC WEATHER</button>
            </p>
          </div>
        </div>
      </Popup>
      <Popup trigger={popupFive} setTrigger={setPopupFive}>
        <div className="row">
          <div className="col-5">
            <img
              src={XLweather}
              className="xlimage"
              alt="weather application"
            />
          </div>
          <div className="col-7">
            <p>
              <u> Objective:</u> Build a functioning application, learn how to
              implement APIs and make a responsive website using Bootstrap.
              <u>Achieved:</u> Building upon my previously-gained knowledge I
              constructed a Weather App. This project helped me to learn how to
              integrate and understand APIs, real-life development workflows,
              hosting, and gain a deeper understanding of JavaScript. The App
              allows users to easily access up-to-date weather conditions and
              forecasts for locations all around the world. I had lots of fun,
              styling the website with a Californian vibe in mind.
              <button>LAUNCH WEATHER APP</button>
            </p>
          </div>
        </div>
      </Popup>
      <Popup trigger={popupSix} setTrigger={setPopupSix}>
        <div className="row">
          <div className="col-5">
            <img src={XLclock} className="xlimage" alt="worldclock app" />
          </div>
          <div className="col-7">
            <p className="heieiei">
              <u> Planned:</u> Gain more experience with APIs, ans especially
              handling and processing local local times. <u>Achieved:</u> My
              second big project was the development of a Java Script World
              Clock App, also built using Bootstrap. This project helped me to
              deepen my API knowledge and refine my development skills.
              Implementing the time first seemed very hard, but I loved reading
              about calculations around UTC, how to work with it and to solve
              challenges creatively.
              <button>LAUNCH WORLD CLOCK APP</button>
            </p>
          </div>
        </div>
      </Popup>
    </div>
  );
}
