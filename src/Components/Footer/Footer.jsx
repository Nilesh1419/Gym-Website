import React from "react";
import "./Footer.css";
import Instagram from "../../Assets/instagram.png";
import Github from "../../Assets/github.png";
import LinkedIn from "../../Assets/linkedin.png";
import Logo from "../../Assets/logo.png";

const Footer = () => {
  return (
    <div className="Footer-container">
      <hr />
      <div className="footer">
        <div className="social-link">
          <img src={Github} alt="" />
          <img src={Instagram} alt="" />
          <img src={LinkedIn} alt="" />
        </div>
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
      </div>
      <div className="blur footer-blur-1"></div>
      <div className="blur footer-blur-2"></div>
    </div>
  );
};

export default Footer;
