import React from "react";
import Projects from "./Projects";
import "../style/work.css";

export default function () {
  return (
    <div className="container-fluid work" id="projects">
      <span>My Works</span>
      <Projects
        image={
          "https://www.stefantopalovic.com/static/media/car-rental-full.c58b37da333d73238fdd.webp"
        }
        title={"Project title"}
        lang={"html"}
        des={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitatio."
        }
      />
      <Projects
        image={"https://source.unsplash.com/500x300"}
        title={"Project title"}
        lang={"html"}
        des={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitatio."
        }
      />{" "}
      <Projects
        image={"https://source.unsplash.com/500x300"}
        title={"Project title"}
        lang={"html"}
        des={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitatio."
        }
      />
    </div>
  );
}
