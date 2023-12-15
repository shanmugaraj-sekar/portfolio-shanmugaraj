import React from "react";
import Button from "react-bootstrap/Button";
import "../style/work.css";

export default function Projects({ image, title, des }) {
  return (
    <div className="project">
      <div className="row project-row shadow">
        <div className="col-md-6 project-img p-0">
          <img src={image}></img>
        </div>
        <div className="col-md-6 project-des">
          <>
            <h1>{title}</h1>
          </>
          <>
            <p>{des}</p>
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
