import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);
  const handlehamburgerMenuOnClick = () => {
    document.body.toggleAttribute("overflow", "hidden");
    setIsHamburgerMenuOpen(!isHamburgerMenuOpen);
  };

  return (
    <>
      <div className="p-6 z-20">
        <button
          onClick={handlehamburgerMenuOnClick}
          className={`hamburger-menu-button ${isHamburgerMenuOpen ? "active" : ""}`}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <nav
        className={`flex items-center transition-all duration-500 ${isHamburgerMenuOpen ? "open" : ""}`}
      >
        <ul>
          <li>
            <NavLink to={"/home"} className="text-tertiary text-nowrap transition hover:opacity-70">
              HOME
            </NavLink>
          </li>

          <li>
            <NavLink
              to={"/destinations"}
              className="text-tertiary text-nowrap transition hover:opacity-70"
            >
              DESTINATIONS
            </NavLink>
          </li>

          <li className="relative space-y-2 group">
            <NavLink
              to={"/destinations"}
              className="text-tertiary text-nowrap transition hover:opacity-70"
            >
              BECOME A FALCON
            </NavLink>

            <ul
              className={`flex flex-col opacity-0 items-center gap-2 absolute transition bg-secondary shadow-md group-hover:top-full group-hover:opacity-100 min-w-52 min-h-16 text-nowrap px-2 pr-12`}
            >
              <li>
                <NavLink
                  to={"/become-a-falcon-member"}
                  className="text-sm text-tertiary transition hover:opacity-70"
                >
                  BECOME A FALCON MEMBER
                </NavLink>
              </li>

              <li>
                <NavLink
                  to={"/become-a-falcon-partner"}
                  className="text-sm text-tertiary transition hover:opacity-70"
                >
                  BECOME A FALCON PARTNER
                </NavLink>
              </li>
            </ul>
          </li>

          <li className="relative space-y-2 group">
            <NavLink
              to={"/our-partners"}
              className=" text-tertiary transition hover:opacity-70 text-nowrap"
            >
              OUR PARTNERS
            </NavLink>
          </li>

          <ul
              className={`flex flex-col opacity-0 items-center gap-2 absolute transition bg-secondary shadow-md group-hover:top-full group-hover:opacity-100 min-w-52 min-h-16 text-nowrap px-2 pr-12`}
            >
              <li>
                <NavLink
                  to={"/become-a-falcon-member"}
                  className="text-sm text-tertiary transition hover:opacity-70"
                >
                  BECOME A FALCON MEMBER
                </NavLink>
              </li>

              <li>
                <NavLink
                  to={"/become-a-falcon-partner"}
                  className="text-sm text-tertiary transition hover:opacity-70"
                >
                  BECOME A FALCON PARTNER
                </NavLink>
              </li>
            </ul>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
