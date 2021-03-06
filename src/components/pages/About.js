import React from "react";

export default function About() {
  // create image constants for easier use below
  const first = require("../images/1.jpg");
  const second = require("../images/JL.jpg");
  // style for page specific
  const width = {
    maxWidth: '300px'
  }
  return (
    <div className="row m-5">
      {/* images div */}
      <div style={width}>
        <img className="img-fluid p-2" src={first} alt="Jacob Lewis" />
        <br></br>
        <img
          className="img-fluid p-2"
          src={second}
          alt="Another of Jacob Lewis"
        />
      </div>
      {/* Professional Section Div */}
      <div className="col-lg-4">
        <div className="container text-center">
          <h1 className="display-4 border-bottom">Professional</h1>
          <p className="lead">
            I am an experienced leader with a demonstrated history working in
            the financial services industry. I am skilled in recruiting and
            developing talent, strategic planning, process improvement,
            innovation, and retail sales environment psychology. Significant
            experience and demonstrated abilities in project management,
            strategic change, networking and resource management. Leaders have
            described me as coachable, self-motivated, efficient, autonomous,
            genuine and dependable. I am sought after for my ability to forecast
            potential bugs, bridge gaps between development and end-users, as
            well as serving as a representative for the project or organization
            to outside vendors or to end users.
          </p>
        </div>
      </div>
      {/* Personal Section Div */}
      <div className="col-lg-4">
        <div className="container text-center">
          <h1 className="display-4 border-bottom">Personal</h1>
          <p className="lead">
            In my free time I love to snowboard and overland with my dog and
            friends. I moved to Colorado in December of 2017, from Wichita, KS,
            to continue my careeer in the financial services industry. I
            recently transitioned from Branch Operations to Enterprise
            Application Services as a DevOps Engineer. I love Formula 1 and the
            NFL. My favorite driver is Max Verstappen and my favorite NFL team
            is the Kansas City Chiefs. I look forward to overlanding and camping
            as much as possible in my truck with my pup Kip!
          </p>
        </div>
      </div>
    </div>
  );
}
