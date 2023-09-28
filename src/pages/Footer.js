import React from "react";
import "./Footer.css";
export default function Footer() {
  return (
    <div className="Footer p-2 p-md-3 p-lg-4">
      <footer className="footer text-center">
        © 2023 Eva Nagengast. <br className="d-block d-md-none" />
        This page was crafted with care
          and built using JavaScript React.{" "}
        <br className="d-block d-xl-none" />
        It is{" "}
        <a
          href="https://github.com/EvaNagengast/PersonalPortfolio"
          target="_blank"
          rel="noreferrer"
          alt="Github repository Eva Nagengast Portfolio"
          className="footerlink px-2 text-decoration-none"
        >
          open-sourced
        </a>
        so feel free to have a look!
      </footer>
    </div>
  );
}
