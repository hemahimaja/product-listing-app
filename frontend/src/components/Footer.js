// src/components/Footer.js
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Product Listing Store. All rights reserved.</p>
      <p>Made with ❤️ by Hema Himaja</p>
    </footer>
  );
};

export default Footer;
