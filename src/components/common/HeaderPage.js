import React from "react";
import { NavLink, Link } from "react-router-dom";

function HeaderPage() {
  const activeStyle = { color: "#F15B2A" };
  return (
    <nav>
      <NavLink exact to="/" activeStyle={activeStyle}>
        Home
      </NavLink>
      {" | "}
      <NavLink exact to="/courses" activeStyle={activeStyle}>
        Courses
      </NavLink>
      {" | "}
      <NavLink to="/about" activeStyle={activeStyle}>
        About
      </NavLink>
    </nav>
  );
}

export default HeaderPage;
