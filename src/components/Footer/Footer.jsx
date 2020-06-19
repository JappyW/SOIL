import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer page-footer">
      <div className="container">
        <ul className="d-flex justify-content-around align-items-center text-center m-0">
          <li>
            <a className="ico-footer facebook" href="https://www.facebook.com/">
              <span className="d-flex align-items-center">
                <FaFacebookF />
                <span className="d-block dis-sm-none pl-1">Facebook</span>
              </span>
            </a>
          </li>
          <li>
            <a
              className="ico-footer instagram"
              href="https://www.instagram.com/"
            >
              <span className="d-flex align-items-center">
                <FaInstagram />
                <span className="d-block dis-sm-none pl-1">Instagram</span>
              </span>
            </a>
          </li>
          <li>
            <a className="ico-footer twitter" href="https://twitter.com/">
              <span className="d-flex align-items-center">
                <FaTwitter />
                <span className="d-block dis-sm-none pl-1">Twitter</span>
              </span>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;