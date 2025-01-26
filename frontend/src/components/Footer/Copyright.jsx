import React from "react";
import { NavLink } from "react-router-dom";

const Copyright = () => {
  return (
    <div>
      <NavLink to={"/"} className="text-tertiary transition opacity-50 hover:opacity-100 text-sm">
        Falcon Sustainability Certification &copy; All Rights Reserved
      </NavLink>
    </div>
  );
};

export default Copyright;
