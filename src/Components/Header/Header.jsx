import React from "react";
import "./Header.css";
import Logo from "../../Assets/logo.png";
import { Link } from "react-scroll";
const Header = () => {
  return (
    <div className="header">
      <img src={Logo} alt="logo" className="logo" />
      <ul className="header-menu">
        <li>Home</li>
        <li>
          <Link to="Programs" spy={true} smooth={true}>
            Programs
          </Link>
        </li>

        <li>
          <Link to="Reasons" spy={true} smooth={true}>
            Why us
          </Link>
        </li>
        <li>
          <Link to="plans" spy={true} smooth={true}>
            Plans
          </Link>{" "}
        </li>
        <li>
          <Link to="testimonials" smooth={true} spy={true}>
            Testimonials
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
