import React from 'react';

export default function Project({ project }) {
    return (
        <>
        <div className="card-body">
                <h5 className="card-title">{project.name}</h5>
                <p className="card-text">
                 {project.short}
                </p>
                <a href={project.live} target="_blank" className={project.live===project.repo ? '' : 'btn btn-primary m-1'}>{project.live===project.repo ? "" : 'Try it out!'}</a>
                <a href={project.repo} target="_blank" className="btn btn-primary m-1">Access the Repository</a>
              </div>
        </>
    )
}