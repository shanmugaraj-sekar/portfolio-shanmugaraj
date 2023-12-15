import React from "react";
import "../style/home.css";
import profile from "../img/shanmugaraj-profile.jpg";

export default function Home() {
  return (
    <div className="container-fluid home " id="home">
      <div className="container  h-100 home-con">
        <div className="row h-100">
          <div className="col-md-6 order-md-2 d-flex flex-column justify-content-center align-items-center">
            <img src={profile} className="portfolio-img" alt="Profile"></img>
          </div>
          <div className="col-md-6 order-md-1 d-flex flex-column justify-content-center">
            <h1 className="d-grid hero-title">
              Front End <span className="">Developer</span>
            </h1>
            <p className="hero-des pt-6">
              Hi, I'm Shanmugaraj. A passionate Front-end React Developer
            </p>
            <div className="d-flex">
              <i className="bi bi-github home-share"></i>
              <i className="bi bi-linkedin home-share"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
