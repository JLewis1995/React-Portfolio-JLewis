import React from "react";

export default function Home() {
  const first = require("../images/1.jpg");
  const second = require("../images/JL.jpg");
  return (
    <div className="m-5">
      <div className="col-3">
        <img className="img-fluid p-2" src={first} alt="Jacob Lewis" />
        <br></br>
        <img className="img-fluid p-2" src={second} alt="Another of Jacob Lewis" />
      </div>
    </div>
  );
}
