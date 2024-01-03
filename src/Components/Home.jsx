import React from "react";
import "../style/home.css";
import profile from "../img/shanmugaraj-profile.jpg";
import Skill from "./Skill";

export default function Home() {
  return (
    <div className="container-fluid home " id="home">
      <div className="container home-con">
        <div className="row home-row">
          <div className="col-md-6 order-md-2 d-flex flex-column justify-content-center align-items-center">
            <img src={profile} className="portfolio-img" alt="Profile"></img>
          </div>
          <div className="col-md-6 order-md-1 d-flex flex-column justify-content-center h-100">
            <h1 className="d-grid hero-title">
              Front End <span className="">Developer</span>
            </h1>
            <p className="hero-des pt-6">
              Hi, I'm Shanmugaraj. A passionate Front-end React Developer
            </p>
            <div className="d-flex gap-4 h4">
              <a href="https://github.com/shanmugaraj-sekar" target="_black">
                <i className="bi bi-github home-share"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/shanmugaraj-sekar/"
                target="_black"
              >
                <i className="bi bi-linkedin home-share"></i>
              </a>
            </div>

            <div className="col-md-12 d-flex ">
              <Skill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
