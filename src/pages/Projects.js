import React, { useState } from "react";

import Popup from "./subpage/Popup";
import Footer from "./Footer";
import "./Projects.css";

export default function Projects() {
  let [popupOne, setPopupOne] = useState(false);
  return (
    <div className="Projects">
      <div className="projectspage">
        <h1>Projects</h1>
        <div className="row ">
          <div className="col-4  ">
            <div class="card">
              <img class="card-img-top" src="..." alt="Card   cap" />
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
              <img class="card-img-top" src="..." alt="Card   cap" />
              <div class="card-body">
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <button onClick={() => setPopupOne(true)}>learn more</button>
              </div>
            </div>
          </div>
          <div className="col-4 ">
            <div class="card">
              <img class="card-img-top" src="..." alt="Card   cap" />
              <div class="card-body">
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <button onClick={() => setPopupOne(true)}>learn more</button>
              </div>
            </div>
          </div>
        </div>
        <div className="row ">
          <div className="col-4  ">
            <div class="card">
              <img class="card-img-top" src="..." alt="Card   cap" />
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
              <img class="card-img-top" src="..." alt="Card   cap" />
              <div class="card-body">
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <button onClick={() => setPopupOne(true)}>learn more</button>
              </div>
            </div>
          </div>
          <div className="col-4 ">
            <div class="card">
              <img class="card-img-top" src="..." alt="Card   cap" />
              <div class="card-body">
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <button onClick={() => setPopupOne(true)}>learn more</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <Popup trigger={popupOne} setTrigger={setPopupOne}>
        <h3>hello</h3>
        xnjscnas emdkwemdokw xewmkxkewo
      </Popup>
    </div>
  );
}
