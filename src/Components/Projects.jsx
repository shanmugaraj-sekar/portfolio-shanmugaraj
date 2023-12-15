import React from "react";
import Button from "react-bootstrap/Button";
import "../style/work.css";

export default function Projects({ image, title, des, lang }) {
  return (
    <div className="project">
      <div className="row project-row shadow">
        <div className="col-md-7 project-img">
          <img src={image}></img>
        </div>
        <div className="col-md-4 project-des">
          <>
            <h1>{title}</h1>
          </>
          <>
            <p>{des}</p>
          </>
          <>
            <img src={lang}></img>
          </>
          <div className="d-flex gap-3">
            <Button variant="primary">Code</Button>
            <Button variant="primary">Preview</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
