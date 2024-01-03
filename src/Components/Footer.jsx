import React from "react";
import "../style/home.css";

function Footer() {
  return (
    <div className=" container-fluid bg-black footer" id="contact">
      <p className="mb-0 ">Shanmugaraj</p>
      <div className="social-links mt-3 d-flex justify-content-center gap-3 p-2">
        <a href="https://www.linkedin.com/in/shanmugaraj-sekar/" target="_blank" rel="linked in">
          <i className="bi bi-linkedin social"></i>
        </a>
        <a href="https://github.com/shanmugaraj-sekar" target="_blank" rel="github">
          <i className="bi bi-github social"></i>
        </a>
      </div>
      <div className="nav">
        <ul>
          <a href="#home">
            <li>Home</li>
          </a>
          <a href="#about">
            <li>About</li>
          </a>
          <a href="#projects">
            <li>Projects</li>
          </a>
          <a href="#contact">
            <li>Contact</li>
          </a>
        </ul>
      </div>
      <div className="line"></div>

      <div className="copy">
        <h6 className="mb-0">&copy; 2023 Shanmugaraj</h6>
      </div>
    </div>
  );
}

export default Footer;
