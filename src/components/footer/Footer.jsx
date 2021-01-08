import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {

  return (
    <footer className="footer">
      <div className="container footer__content">
        <Link to="/" className="link" >Superheroes</Link>
      </div>
    </footer>
  )
}

export default Footer;
