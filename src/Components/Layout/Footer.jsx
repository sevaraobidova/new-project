import React from "react";
import "./Footer.scss";
import Logo from "../../assets/img/logo.png";
import Email from "../../assets/img/email.png";
import Phone from "../../assets/img/phone.png";
import Location from "../../assets/img/location.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <a href="#" className="footer-logo-link">
          {" "}
          <img src={Logo} />{" "}
        </a>
        <p>
          I have always striven to fix beauty in wood, stone, <br></br>glass or pottery,
          that has been my creed.
        </p>
      </div>

      <div className="footer-info">
        <div className="box">
          <img src={Email} />
          <span className="box-text">EMAIL</span>
          <span className="box-text2">pompeopotery@gmail.com</span>
        </div>

        <div className="box">
          <img src={Location} />
          <span className="box-text">FIND</span>
          <span className="box-text2">Central Park, Manhattan New York, 1101</span>
        </div>

        <div className="box">
          <img src={Phone} />
          <span className="box-text">CALL</span>
          <span className="box-text2">+1 292 345 678</span>
        </div>















      </div>
    </footer>
  );
};

export default Footer;
