import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <p>
        <Link to="/">Home</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </p>
      <small>Copyright&copy; LearnDeck all right reserved.</small>
    </footer>
  );
};

export default Footer;
