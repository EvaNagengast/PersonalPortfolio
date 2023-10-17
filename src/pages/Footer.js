import React from "react";
import "./Footer.css";
export default function Footer() {
  return (
    <div className="Footer p-2 p-md-3 p-lg-4">
      <footer className="text-center footer">
        © 2023 Eva Nagengast. <br className="d-block d-md-none" />
        This page was crafted with care and built using React.js.{" "}
        <br className="d-block d-xl-none" />
        It is
        <a
          href="https://github.com/EvaNagengast/PersonalPortfolio"
          target="_blank"
          rel="noreferrer"
          alt="Github repository Eva Nagengast Portfolio"
          className="px-2 text-decoration-none footerlink"
        >
          open-sourced
        </a>
        so feel free to have a look!
      </footer>
    </div>
  );
}
