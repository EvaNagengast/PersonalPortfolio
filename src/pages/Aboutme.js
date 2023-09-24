import React from "react";
import Footer from "./Footer";
import AboutImage from "../media/aboutmeimage.jpg";
import "./Aboutme.css";
import { useNavigate } from "react-router-dom";

export default function Aboume() {
  let navigate = useNavigate();
  return (
    <div className="Aboutme">
      <div className="aboutmepage">
        <div className="heading">
          <h1>Hi I'm Eva</h1>
        </div>
        <main>
          <div className="row">
            <div className="col-3">
              <img
                src={AboutImage}
                alt="Eva Nagengast profile"
                className="aboutMeImage"
              ></img>
               <figcaption>Me, audio engineering a Podcast at Reading Festival '23</figcaption>
            </div>
            <div className="col-9 text-start">
              {" "}
              <div className="aboutinfotext ">
                My journey hasn't followed a linear path.<br/>
                It's been a
                winding road filled with diverse experiences, each contributing
                to my unique perspective and skillset. I've worn many hats and tackled a
                variety of roles, excelling in each one. My colourfull career began in the
                world of mechatronics, where I delved into the intricacies of
                combining mechanics and electronics. From there, I ventured into
                music booking and hospitality, immersing myself in the vibrant
                world of events and entertainment. <br />
                <br />
                My pivotal moment came when I joined a company where I worked
                with both artificial intelligence and audio technology. I had
                the fascinating opportunity to transform AI audio into
                realistic, human-like speech. This experience marked my entry
                into the world of tech, a journey that continues to evolve.{" "}
                <br />
                <br />
                Today, I'm a junir Front-End developer, and I've found my true passion
                in bringing digital experiences to life. Fueled by my infectious
                enthusiasm, immense dedication, and unwavering passion for
                frontend development, I constantly seek to create user-friendly
                and visually stunning websites and apps. <br />
                <br />
                When I'm not deeply engrossed in a new project, you'll often
                find me volunteering at local conservation sites, where I'm
                committed to preserving our natural world. I'm also a regular
                presence at music venues and gigs, attending concerts to savor
                the magic of live music. Additionally, I take care of the local
                squirrel population, a charming reminder of the beauty in our
                everyday surroundings.
                <br />
                <br /> I'm excited for the future and can't wait to have a chat
                about your ideas and projects
              </div>
            </div>
          </div>
          <button
            onClick={() => {
              navigate("../projects");
            }}
          >
            see my projects
          </button>
          <button
            onClick={() => {
              navigate("../contact");
            }}
          >
            see my projects
          </button>
        </main>
      </div>
      <Footer />
    </div>
  );
}
