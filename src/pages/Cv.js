import React from "react";
import TypeIt from "typeit-react";
import monoimage from "../media/monoimg.png";
import pdf from "../media/evanagengastcv.pdf";
import "./Cv.css";

export default function Cv() {
  return (
    <div className="Cv">
      <div className="cvpage">
        <a href={pdf} className="downloadbutton">
          CLICK HERE FOR A PDF OF MY FULL RESUME
        </a>
        <main>
          <div className="row">
            <div className="col">
              <h1>
                Eva <br />
                Nagengast
              </h1>
            </div>
            <div className="col">
              <img src={monoimage} />
              <div>
                <span className="subheader">I'm </span>
                <span className="highlightred">
                  <TypeIt
                    options={{
                      speed: 150,
                      waitUntilVisible: true,
                      loop: true,
                      loopDelay: 15000,
                    }}
                    getBeforeInit={(instance) => {
                      instance

                        .type("a coder.")
                        .pause(1000)
                        .delete(8)
                        .pause(700)
                        .type("living in London.")
                        .pause(1000)
                        .delete(17)
                        .pause(700)
                        .type("from Germany.")

                        .pause(1000)
                        .delete(13)
                        .pause(700)
                        .type("loving music.")
                        .pause(1000)
                        .delete(13)
                        .pause(700)

                        .type("Eva.");
                      return instance;
                    }}
                  />
                </span>
              </div>
            </div>
          </div>
          <h2> Career Summary</h2>
          <div className="row">
            <div className="col">
              <h3>AI Audio Content Evaluator - Linguist</h3>
            </div>
            <div className="col">
              <h3>From Apr 23</h3>
            </div>
          </div>
          <h4>DeepZen lt. - Freelance - Remote</h4>
          <p>
            <ul>
              <li>
                Use of a specialised program to transform AI-generated audio
                into realistic human-like speech.
              </li>
              <li>
                Analysing, improving and fine-tuning the audio files with the
                DeepZen Studio.
              </li>
              <li>
                Making nuanced adjustments based on understanding of tone,
                pacing, and inflection.
              </li>
            </ul>
          </p>
          <div className="row">
            <div className="col">
              <h3>Plant Technician</h3>
            </div>
            <div className="col">
              <h3>May 22 – Mar 23</h3>
            </div>
          </div>
          <h4>Plant Plan - Leicester/London</h4>
          <p>
            <ul>
              <li>
                Visited clients in London, Surrey, Essex, and Kent to maintain
                live plant displays.
              </li>
              <li>
                Managed schedules, ordered plants and materials, and solved
                practical challenges on-site.
              </li>
              <li>
                Liaised professionally with customers and communicated with
                managers, and stakeholders.
              </li>
            </ul>
          </p>
          <div className="row">
            <div className="col">
              <h3>Assistant General Manager</h3>
            </div>
            <div className="col">
              <h3>Aug 18 – Apr 22</h3>
            </div>
          </div>
          <h4>Honest Burgers - London</h4>
          <p>
            <ul>
              <li>
                Offered a homely experience for customers, with an
                old-school-hospitality mindset.
              </li>
              <li>
                Delivered and coordinated staff training, mentored new staff,
                and trained FOH and BOH
              </li>
              <li>
                Audit responsibilities, set KPIs and sales targets, conducted
                interviews
              </li>
              <li>
                Implemented craft exchange, saving the company 25% of costs on
                external contractors.
              </li>
            </ul>
          </p>
          <div className="row">
            <div className="col">
              <h3>Tour-Booking Assistant</h3>
            </div>
            <div className="col">
              <h3>Jan 18 – Jul 18</h3>
            </div>
          </div>
          <h4>Destiny Tourbooking - Berlin (6 Month contract)</h4>
          <p>
            <ul>
              <li>
                Collaborated with bands and promoters, efficiently exchanging
                tour booking information.
              </li>
              <li>
                Drafted contracts and invoices, frequently releasing pre-sale
                numbers and show announcements.
              </li>
              <li>
                Developed an internal data exchange system to save time and
                improve workflow.
              </li>
            </ul>
          </p>
          <div className="row">
            <div className="col">
              <h3>Production Shift Manager, Team Leader</h3>
            </div>
            <div className="col">
              <h3> Sep 08 – Dec 17</h3>
            </div>
          </div>
          <h4>Robert Bosch GmbH - Bamberg</h4>
          <p>
            <ul>
              <li>
                Led large teams of up to 40 people, providing support,
                direction, and coaching.
              </li>
              <li>
                Coordinated maintenance projects with engineering departments
                locally and overseas.
              </li>
              <li>
                Implemented and maintained 5S Standards for a productive and
                safe work environment.
              </li>
              <li>
                Improved intern storage space and reduced storage cost by 15%
                through active research and SAP.
              </li>
            </ul>
          </p>
          <h2>Projects</h2>
          <div className="row">
            <div className="col">
              <h4> Volunteering conservation work, nature education </h4>
            </div>
            <div className="col">
              <h4> From 2023 </h4>
            </div>
          </div>
          <p>Creekside Discovery Center, Nature Conservation- London</p>
          <div className="row">
            <div className="col">
              <h4> Founder, Distribution, Artist support, Accounting</h4>
            </div>
            <div className="col">
              <h4> 2014 - 2017 </h4>
            </div>
          </div>
          <p>Raptor Records, Label - Nuremberg</p>
          <div className="row">
            <div className="col">
              <h4> Event Management, local culture and music support</h4>
            </div>
            <div className="col">
              <h4> 2013 - 2016 </h4>
            </div>
          </div>
          <p>H&S Subculture events - Nuremberg </p>
          <h2> Education</h2>
          <div className="row">
            <div className="col">
              <h4> SheCodes</h4>
            </div>
            <div className="col">
              <h4>Jul - Oct 23 </h4>
            </div>
          </div>
          <p>Certificate in Front-End Development</p>
          <div className="row">
            <div className="col">
              <h4> ILS Fernhochschule</h4>
            </div>
            <div className="col">
              <h4> 2008-2012 </h4>
            </div>
          </div>
          <p>BA, German</p>
          <div className="row">
            <div className="col">
              <h4> Bosch GmbH </h4>
            </div>
            <div className="col">
              <h4> 2008-2012 </h4>
            </div>
          </div>
          <p> Apprenticeship + A-levels</p>
          <h2>SKILLS/TOOLS</h2>
          <ul>
            <li>HTML + CSS</li>
            <li>JavaScript</li>

            <li>React</li>
            <li>VS Code </li>
            <li>Bootstrap and Responsive Development </li>
            <li>Figma</li>
            <li>Libraries and APIs </li>
            <li>Adobe Illustrator, Fresco, PS</li>
          </ul>
          <h2>Languages</h2>
          <ul>
            <li>German - Native </li>
            <li>English - Bilingual Proficiency</li>
          </ul>
          <h2>Strength</h2>
          <ul>
            <li>Front-end development</li>
            <li> ProjectManagement </li>
            <li> Creativity </li>
            <li>Excellent Communication</li> <li>Adaptability</li>
          </ul>
        </main>
      </div>
    </div>
  );
}
