import React from 'react';
import TypeIt from 'typeit-react';
import monoimage from '../media/monoimg.png';
import pdf from '../media/EvaNagengastResume.pdf';
import './Cv.css';

export default function Cv() {
  return (
    <div className='Cv'>
      <div className='cvpage'>
        <a
          href={pdf}
          alt='PDF of Evas Resume'
          className='mx-auto mt-4 mb-2 px-3 py-2 btn-dark-base downloadbutton'>
          CLICK HERE FOR PDF-View
        </a>
        <main>
          <div className='row justify-content-between  '>
            <div className='col-12 col-md order-2 order-md-1'>
              <h1>
                Eva <br />
                Nagengast
              </h1>
            </div>
            <div className='col-12 col-md  order-1 order-md-2'>
              <div className='mt-2 mt-lg-4 me-0 me-lg-4 float-md-end cvimage'>
                <img
                  src={monoimage}
                  alt='Eva Nagengast'
                />
                <div className='imgcaption'>
                  <span className='subheader'>I'm </span>
                  <span className='highlightred'>
                    <TypeIt
                      options={{
                        speed: 150,
                        waitUntilVisible: true,
                        loop: true,
                        loopDelay: 15000,
                      }}
                      getBeforeInit={(instance) => {
                        instance

                          .type('a coder.')
                          .pause(1000)
                          .delete(8)
                          .pause(700)
                          .type('living in London.')
                          .pause(1000)
                          .delete(17)
                          .pause(700)
                          .type('from Germany.')

                          .pause(1000)
                          .delete(13)
                          .pause(700)
                          .type('loving music.')
                          .pause(1000)
                          .delete(13)
                          .pause(700)

                          .type('Eva.');
                        return instance;
                      }}
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <h2> Career Summary</h2>
          <div className='row mb-2 mb-md-0 pt-1 '>
            <div className='col-12 col-md-9 '>
              <h3 className='mb-0'>Freelance</h3>
            </div>
            <div className='col-12 col-md-3'></div>
          </div>
          <div className='row mb-2 mb-md-0 pt-1 '>
            <div className='col-12 col-md-9 '>
              <h4 className='mb-0'>
                Front End Development / Website Maintenance
              </h4>
            </div>
            <div className='col-12 col-md-3 text-start text-md-end'>
              <h4 className='mb-0'>since Nov 23</h4>
            </div>
          </div>
          <ul>
            <li>
              Developing and designing customised, responsive, user-friendly and
              beautiful websites using HTML, CSS, JavaScript and React.js
            </li>
            <li>
              Optimising websites with focus on clients visions and missions,
              prioritising high-quality standards and deadlines
            </li>
            <li>
              Collaborating on commercial websites with frameworks like Next.js,
              or responsive frameworks like Bootstrap
            </li>
            <li>
              Writing clean and maintainable code, incorporating industry
              standards, continuously improving projects
            </li>
          </ul>
          <div className='row mb-2 mb-md-0 pt-1 '>
            <div className='col-12 col-md-9 '>
              <h4 className='mb-0'>Audio Content Evaluator, Deep Zen</h4>
            </div>
            <div className='col-12 col-md-3 text-start text-md-end'>
              <h4 className='mb-0'>Apr 23 - Dec 23</h4>
            </div>
          </div>
          <ul>
            <li>
              Use of specialised programs to transform AI-generated audio into
              human-like speech patterns
            </li>
            <li>
              Analysing, improving and fine-tuning audio files, audio libraries
              and collections
            </li>
          </ul>{' '}
          <div className='row mb-2 mb-md-0 pt-1 '>
            <div className='col-12 col-md-9 '>
              <h4 className='mb-0'>
                {' '}
                Translator German/English, Box To Box Films
              </h4>
            </div>
            <div className='col-12 col-md-3 text-start text-md-end'>
              <h4 className='mb-0'> Mar 20 – Jul 21</h4>
            </div>
          </div>
          <ul>
            <li>
              Adaptation and translation of the subtitles of “Formula 1: Drive
              to Survive” from German to English
            </li>
            <li>
              Collaborating with project managers to meet strict deadlines and
              ensure high quality translations
            </li>
          </ul>
          <div className='row mb-2 mb-md-0 pt-3'>
            <div className='col-12 col-md-8'>
              <h3 className='mb-0'>Plant Technician</h3>
            </div>
            <div className='col-12 col-md-4 text-start text-md-end'>
              <h3 className='mb-0'>May 22 - Mar 23</h3>
            </div>
          </div>
          <h4 className='mb-2'>Plant Plan - Leicester/London</h4>
          <ul>
            <li>
              Visited clients to maintain live plant displays, to give advise
              and improve installations
            </li>
            <li>
              Managed schedules, ordered plants and materials, and solved
              practical challenges on-site{' '}
            </li>
            <li>
              Liaised professionally with customers and communicated with
              managers, and stakeholders
            </li>
          </ul>
          <div className='row mb-2 mb-md-0 pt-3'>
            <div className='col-12 col-md-8'>
              <h3 className='mb-0'>Assistant General Manager</h3>
            </div>
            <div className='col-12 col-md-4 text-start text-md-end'>
              <h3 className='mb-0'>Aug 18 - Apr 22</h3>
            </div>
          </div>
          <h4 className='mb-2'>Honest Burgers - London</h4>
          <ul>
            <li>
              {' '}
              Offered a homely experience for customers, with an
              old-school-hospitality mindset
            </li>
            <li>
              Delivered and coordinated staff training, mentored new staff, and
              trained FOH and BOH
            </li>
            <li>
              Audit responsibilities, set KPIs and sales targets, conducted
              interviews
            </li>
            <li>
              Implemented craft exchange, saving the company 25% of costs on
              external contractors
            </li>
          </ul>
          <div className='row mb-2 mb-md-0 pt-3'>
            <div className='col-12 col-md-8'>
              <h3 className='mb-0'>Tour-Booking Assistant</h3>
            </div>
            <div className='col-12 col-md-4 text-start text-md-end'>
              <h3 className='mb-0'>Jan 18 - Jul 18</h3>
            </div>
          </div>
          <h4 className='mb-2'>
            Destiny Tourbooking - Berlin (6 Month contract)
          </h4>
          <ul>
            <li>
              Collaborated with bands and promoters, efficiently exchanging tour
              booking information
            </li>
            <li>
              Drafted contracts and invoices, frequently releasing pre-sale
              numbers and show announcements{' '}
            </li>
            <li>
              Developed an internal data exchange system to save time and
              improve workflow
            </li>
          </ul>
          <div className='row mb-2 mb-md-0 pt-3'>
            <div className='col-12 col-md-8'>
              <h3 className='mb-0'>Production Shift Manager, Team Leader</h3>
            </div>
            <div className='col-12 col-md-4 text-start text-md-end'>
              <h3 className='mb-0'> Sep 08 - Dec 17</h3>
            </div>
          </div>
          <h4 className='mb-2'>Robert Bosch GmbH - Bamberg</h4>
          <ul>
            <li>
              Led large teams of up to 40 people, providing support, direction
              and coaching
            </li>
            <li>
              Coordinated and carried out maintenance projects with engineers
              locally and overseas
            </li>
            <li>
              Implemented and maintained 5S Standards for a productive and safe
              work environment
            </li>
            <li>
              Improved intern storage space and reduced storage cost by 15%
              through active research and SAP.
            </li>
          </ul>
          <h2 className='pt-3'>Projects</h2>
          <div className='row'>
            <div className='col-12 col-sm-8'>
              <h4 className='pt-2 mb-0'>
                {' '}
                Volunteering conservation work, nature education{' '}
              </h4>
            </div>
            <div className='col-12 col-sm-4 text-end'>
              <h4 className='pt-0 text-start text-sm-end'> From 2023 </h4>
            </div>
          </div>
          <p className='mt-0 pt-md-1'>
            Creekside Discovery Center, Nature Conservation- London
          </p>
          <div className='row pt-2'>
            <div className='col-12 col-sm-8'>
              <h4 className='pt-2 mb-0'>
                {' '}
                Founder, Distribution, Artist support, Accounting
              </h4>
            </div>
            <div className='col-12 col-sm-4 text-end'>
              <h4 className='pt-0 text-start text-sm-end'> 2014 - 2017 </h4>
            </div>
          </div>
          <p className='mt-0 pt-md-1'>Raptor Records, Label - Nuremberg</p>
          <div className='row pt-2'>
            <div className='col-12 col-sm-8'>
              <h4 className='pt-2 mb-0'>
                Event Management, local culture and music support
              </h4>
            </div>
            <div className='col-12 col-sm-4 text-end'>
              <h4 className='pt-0 text-start text-sm-end'> 2013 - 2016 </h4>
            </div>
          </div>
          <p className='mt-0 pt-md-1'>H&S Subculture events - Nuremberg </p>
          <div className='sideSection'>
            <h2 className='pt-3'> Education</h2>
            <div className='row pt-2'>
              <div className='col-12 col-sm-8 '>
                <h4 className='mb-0'> SheCodes</h4>
              </div>
              <div className='col-12 col-sm-4 text-end'>
                <h4 className='mb-1 mb-sm-0 text-start text-sm-end'>2023</h4>
              </div>
            </div>
            <p>
              Certificate in Front-End Development - HTML, CSS, JavaScript,
              React.js
            </p>
            <div className='row pt-2'>
              <div className='col-12 col-sm-8 pt-3 pt-sm-2'>
                <h4 className='mb-0'> Bosch GmbH </h4>
              </div>
              <div className='col-12 col-sm-4 text-end'>
                <h4 className='mb-1 mb-sm-0 text-start text-sm-end'>
                  2005 - 2008
                </h4>
              </div>
            </div>
            <p>BTEC + Apprenticeship</p>
            <div className='row pt-2'>
              <div className='col-12 col-sm-8 pt-3 pt-sm-2'>
                <h4 className='mb-0'>Adalbert Raps Schule </h4>
              </div>
              <div className='col-12 col-sm-4 text-end'>
                <h4 className='mb-1 mb-sm-0 text-start text-sm-end'>2008</h4>
              </div>
              <p>A-levels </p>
            </div>
            <div className='row pt-2'>
              <div className='col-12 col-sm-8 pt-3 pt-sm-2'>
                <h4 className='mb-0'>Realschule Hirschaid </h4>
              </div>
              <div className='col-12 col-sm-4 text-end'>
                <h4 className='mb-1 mb-sm-0 text-start text-sm-end'>
                  until 2005
                </h4>
              </div>
            </div>
            <p>GCSEs </p>
            <h2 className='pt-3'>SKILLS</h2>
            <ul className='ps-1'>
              <li>Front-End Development - HTML + CSS, JavaScript, React.js</li>
              <li>Version control - Git, GitHub, BitBucket</li>

              <li>Responsive and Agile Web Development</li>
              <li>Frameworks - Next.js, Bootstrap, Tailwind </li>
              <li>CMS, Social Media, SEO</li>
              <li>Google Workspace, MS Office</li>
              <li> Adobe - PhotoShop, Illustrator, Audition, Fresco</li>
            </ul>
            <h2 className='pt-3'>Languages</h2>
            <ul className='ps-1'>
              <li>German - Native </li>
              <li>English - Bilingual Proficiency</li>
              <li>Spanish - Beginner</li>
            </ul>
            <h2 className='pt-3'>Strengths</h2>
            <ul className='ps-1'>
              <li>Excellent Communication</li>
              <li>Adaptability and Flexibility</li>
              <li>Ingenuity and Creativity </li>
              <li>Communication and Teamwork</li>
              <li> Quick Perception </li>
              <li>Organisational Skills</li>
              <li>Workflow Efficiency</li>
            </ul>
          </div>
        </main>
      </div>
    </div>
  );
}
