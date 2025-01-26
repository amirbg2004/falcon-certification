import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="footer-navbar flex flex-col md:flex-row items-center w-4/12 justify-between gap-4">
      <NavLink to={"/about-us"} className="text-tertiary text-nowrap transition hover:opacity-70">
        ABOUT US
      </NavLink>

      <NavLink to={"/contact-us"} className="text-tertiary text-nowrap transition hover:opacity-70">
        CONTACT US
      </NavLink>

      <NavLink
        to={"/ask-for-a-consultant"}
        className="text-tertiary text-nowrap transition hover:opacity-70"
      >
        ASK FOR A CONSULTANT
      </NavLink>
    </div>
  );
};

export default Navbar;
