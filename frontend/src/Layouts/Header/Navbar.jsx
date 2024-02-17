import React from "react";
import { NavLink } from "react-router-dom";
import { Logo } from "../../SVG";
import {
  Button,
  activeLink,
  inactiveLink,
  navClass,
  liClass,
  ulClass,
} from "../../Components/index";

const Navbar = () => {
  const navLinks = [
    { id: "/", link: "Home" },
    { id: "/about", link: "About Us" },
    { id: "/properties", link: "Properties" },
    { id: "/services", link: "Services" },
  ];

  return (
    <nav className={navClass}>
      <NavLink to="/">
        <img src={Logo} alt="logo" />
      </NavLink>
      <ul className={ulClass}>
        {navLinks.map((navLink) => (
          <li className={liClass} key={navLink.id}>
            <NavLink
              className={({ isActive }) =>
                isActive ? activeLink : inactiveLink
              }
              to={navLink.id}
            >
              {navLink.link}
            </NavLink>
          </li>
        ))}
      </ul>
      <NavLink to="/contact">
        <Button text="Contact Us" color="darkGrey" />
      </NavLink>
    </nav>
  );
};

export default Navbar;