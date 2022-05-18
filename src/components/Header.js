import React from "react";

export default function Header({ currentPage }) {
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
