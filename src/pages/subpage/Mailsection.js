import React from "react";
import "./Mailsection.css";
export default function Mailsection() {
  return (
    <div className="Mailsection ps-2">
      
      <div className=" my-5 my-lg-2 mail">
        <h2 className="text-start mb-3 mb-lg-2 ps-3">SAY HELLO</h2>
        <form
          target="_blank"
          action="https://formsubmit.co/eva.nagengast.dev@gmail.com"
          method="POST"
        >
          <div className="form-group">
            <div className="row">
              <div className="col-7 col-sm-5 mb-3 mb-lg-2  forminput">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Name"
                  required
                />
              </div>

              <div className="col-12 col-sm-7 mb-3 forminput">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Email Address"
                  required
                />
              </div>
            </div>
          </div>
          <div className="form-group mb-3 mb-lg-2">
            <textarea
              placeholder="Your Message"
              className="form-control"
              name="message"
              rows="5"
              required
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="form-control px-3 align-start btn-base-light"
            >
              SEND
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
