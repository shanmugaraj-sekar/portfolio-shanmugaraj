import React from "react";
import Projects from "./Projects";
import "../style/work.css";
import evoke from "../img/ecommerce-website-evoke.png";
export default function () {
  return (
    <div className="container-fluid work" id="projects">
      <span>My Works</span>
      <Projects
        image={evoke}
        title={"E-Commerce"}
        lang={"HTML | CSS"}
        des={
          "Crafted a chic dress store website using HTML and CSS for a stylish and user-friendly online shopping experience. seamlessly blending elegant aesthetics with intuitive user experience for a delightful online shopping journey."
        }
        code={"https://github.com/shanmugaraj-sekar/ecommerce-website-evoke"}
        prev={"https://ecommerce-website-evoke.vercel.app/index.html"}
      />
    </div>
  );
}
