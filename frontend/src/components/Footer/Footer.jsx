import React from "react";
import Copyright from "./Copyright";
import Navbar from "./Navbar";

const Footer = () => {
  return (
    <footer>
      <Navbar />
      <div className="border-2 bg-tertiary"></div>
      <Copyright />
    </footer>
  );
};

export default Footer;
