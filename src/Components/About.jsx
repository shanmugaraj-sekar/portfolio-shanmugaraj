import React from "react";
import about from "../img/shanmugaraj-profile.jpg";
import "../style/about.css";

export default function About() {
  return (
    <div className="container-fluid about" id="about">
      {/* <div className="d-flex justify-content-center p-3"></div> */}
      <div className="about-sec">
        <div className="row">
          <div className="col-md-4 d-flex justify-content-center align-items-center">
            <img src={about} className="about-img"></img>
          </div>
          <div className="col-md-8 d-flex flex-column justify-content-center about-dec">
            <h1>About </h1>

            <p>
              Hi, I'm Shanmugaraj , a passionate web developer with expertise in
              HTML, CSS, and React.js. I enjoy turning ideas into user-friendly,
              interactive, and visually appealing websites.My journey in web
              development started with a fascination for creating digital
              experiences. I am constantly learning and exploring new
              technologies to stay up-to-date with industry trends.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
