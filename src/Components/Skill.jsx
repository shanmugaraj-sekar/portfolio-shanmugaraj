import React from "react";
import html from "../img/icons/html-icon.png";
import css from "../img/icons/css-icon.png";
import js from "../img/icons/js-icon.png";
import react from "../img/icons/react-icon.png";
import "../style/work.css";

// css are in Work.css

export default function Skill() {
  return (
    <div className=" skill-con  d-flex flex-wrap align-items-center">
      <div>
        <p className="skill-head">Tech Stack </p>
      </div>
      <div className=" d-flex skill-p">
        <div className="skill-sec">
          <img className="skill-img" src={html} title="HTML5" />
        </div>
        <div className="skill-sec">
          <img className="skill-img" src={css} title="CSS3" />
        </div>
        <div className="skill-sec">
          <img className="skill-img" src={js} title="JAVASCRIPT" />
        </div>
        <div className="skill-sec">
          <img className="skill-img" src={react} title="REACT JS" />
        </div>
      </div>
    </div>
  );
}
