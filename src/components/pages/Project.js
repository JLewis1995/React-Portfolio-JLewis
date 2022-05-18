import React from "react";

export default function Project({ project }) {
  const style = {
    buttonNew: {
      color: "white",
      backgroundColor: "#2747fd",
    },
  };

  return (
    <>
      <div className="m-5 col-3 card py-4">
        <div className="card-body">
          <img
            className="card-img-top"
            src={require(`../images/${project.location}/image.png`)}
            alt={project.name}
          ></img>
          <h5 className="card-title">{project.name}</h5>
          <p className="card-text">{project.short}</p>
          <a
            href={project.live}
            target="_blank"
            style={style.buttonNew}
            className={project.live === project.repo ? "" : "btn btn- m-1"}
          >
            {project.live === project.repo ? "" : "Try it out!"}
          </a>
          <a
            href={project.repo}
            target="_blank"
            style={style.buttonNew}
            className="btn btn- m-1"
          >
            Access the Repository
          </a>
        </div>
      </div>
    </>
  );
}
