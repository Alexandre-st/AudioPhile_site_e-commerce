import { Link } from "react-router-dom";
import facebookLogo from "../assets/shared/desktop/icon-facebook.svg";
import instagramLogo from "../assets/shared/desktop/icon-instagram.svg";
import twitterLogo from "../assets/shared/desktop/icon-twitter.svg";
import audiophile from "../assets/shared/desktop/logo.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container container">
        <div className="footer-border" />
        <div className="footer-hero">
          <img
            className="footer-hero-img"
            src={audiophile}
            alt="Audiophile logo"
          />
          <ul className="footer-hero-link">
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/headphones">HEADPHONES</Link>
            </li>
            <li>
              <Link to="/speakers">SPEAKERS</Link>
            </li>
            <li>
              <Link to="/earphones">EARPHONES</Link>
            </li>
          </ul>
        </div>
        <p className="footer-text text">
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>
        <div className="footer-link">
          <p className="footer-link-copyright text">
            Copyright 2024. All Rights Reserved
          </p>
          <div className="footer-link-img">
            <li>
              <img src={facebookLogo} alt="Facebook logo" />
            </li>
            <li>
              <img src={twitterLogo} alt="Twitter logo" />
            </li>
            <li>
              <img src={instagramLogo} alt="Instagram logo" />
            </li>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
