import React from "react";
import "./Mailsection.css";
export default function Mailsection() {
  return (
    <div className="Mailsection">
      <div className="mail">
        <h2 className="text-start ps-3">SAY HELLO</h2>
        <form
          target="_blank"
          action="https://formsubmit.co/eva.nagengast.dev@gmail.com"
          method="POST"
        >
          <div className="form-group">
            <div className="row">
              <div className="col-6 mb-2 forminput name">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Name"
                  required
                />
              </div>
              <div className="col-6 mb-2 forminput">
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
          <div className="form-group mb-2">
            <textarea
              placeholder="Your Message"
              className="form-control"
              name="message"
              rows="4"
              required
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="form-control align-start btn-base-light"
            >
              SEND
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
