import React from "react";
import "./Footer.css";
export default function Footer() {
  return (
    <div className="Footer">
      <footer className="footer text-center">
        © 2023 Eva Nagengast. This page was crafted with care and built using
        JavaScript React. It is{" "}
        <a
          href="https://github.com/EvaNagengast/PersonalPortfolio"
          target="_blank"
          rel="noreferrer"
          alt="Github repository Eva Nagengast Portfolio"
          className="footerlink px-2 text-decoration-none"
        >
          open-sourced
        </a>{" "}
        so feel free to have a look!
      </footer>
    </div>
  );
}
