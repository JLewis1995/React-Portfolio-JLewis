import React from "react";

// WHEN I view the header
// THEN I am presented with the developer's name and navigation with titles corresponding to different sections of the portfolio

// Acceptance criteria met for this page

export default function Header({currentPage}) {
  return (
    <>
    <div className="m-5">
      <h1 className="display-4">Jacob L. Lewis</h1>
      <p className="lead">Associate DevOps Engineer</p>
      <p className="lead">Prev. Branch Supervisor</p>
      <hr className="my-4" />

      <h1>{` ${currentPage}: `}</h1>
    </div>
    </>
  );
}
