import React from "react";
import Project from "./Project";

function Portfolio() {
  const projectNames = [
    {
      id: 1,
      name: "Palabra2",
      short: "Full Stack Group Project",
      repo: "https://github.com/emmareimer/palabra_2",
      live: "https://palabra-2.herokuapp.com/",
      location: 'palabra'
    },
    {
      id: 2,
      name: "Jakes JATE",
      short: "IndexDb Note App",
      repo: "https://github.com/JLewis1995/Jake-s-Text-Editor-JATE",
      live: "https://jakes-jate.herokuapp.com/",
      location: `jate`
    },
    {
      id: 3,
      name: "Network-Social",
      short: "Social Network Back-End API App",
      repo: "https://github.com/JLewis1995/Network-Social",
      live: "https://github.com/JLewis1995/Network-Social",
      location: 'network'
    },
    {
      id: 4,
      name: "Swifty Ecommerce Back-End",
      short: "Back-End E-Commerce App",
      repo: "https://github.com/JLewis1995/Swifty_E-Commerce_Back_End",
      live: "https://github.com/JLewis1995/Swifty_E-Commerce_Back_End",
      location: 'swifty'
    },
    {
      id: 5,
      name: "TrustyEmployeeTracker",
      short: "Company Employee Tracking Database Application",
      repo: "https://github.com/JLewis1995/TrustyEmployeeTracker",
      live: "https://github.com/JLewis1995/TrustyEmployeeTracker",
      location: 'trusty'
    },
    {
      id: 6,
      name: "README Generator",
      short: "Node.js App",
      repo: "https://github.com/JLewis1995/README-Generator",
      live: "https://github.com/JLewis1995/README-Generator",
      location: 'read'
    },
  ];

  return (
    <>
      <div className="m-5 container">
        <div className="row">
          {projectNames.map((item) => (
            <Project project={item} key={item.id}/>
          ))}
          ,
        </div>
      </div>
    </>
  );
}

export default Portfolio;
