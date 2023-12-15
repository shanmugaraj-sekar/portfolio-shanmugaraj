import React from "react";
import html from "../img/icons/html-icon.png";
import css from "../img/icons/css-icon.png";
import js from "../img/icons/js-icon.png";
import react from "../img/icons/react-icon.png";
import "../style/work.css";

// css are in Work.css

export default function Skill() {
  return (
    <div className="container-fluid skill-con">
      <div className="container">
        <div className="d-flex justify-content-center skill-head">
          Tech Stack
        </div>
        <div className="d-flex flex-wrap justify-content-evenly pt-5 ">
          <div className="shadow-lg bg-light skill-sec">
            <img className="skill-img" src={html} title="HTML5" />
          </div>
          <div className="shadow-lg bg-light skill-sec">
            <img className="skill-img" src={css} title="CSS3" />
          </div>
          <div className="shadow-lg bg-light skill-sec">
            <img className="skill-img" src={js} title="JAVASCRIPT" />
          </div>
          <div className="shadow-lg bg-light skill-sec">
            <img className="skill-img" src={react} title="REACT JS" />
          </div>
        </div>
      </div>
    </div>
  );
}
