import React from "react";
import Project from "./Project";

// WHEN I am presented with the Portfolio section
// THEN I see titled images of six of the developer’s applications with links to both the deployed applications and the corresponding GitHub repositories

// TODO - use grid to arrange

function Portfolio() {
  const projectNames = [
    {
      id: 1,
      name: "Palabra2",
      short: "Full Stack Group Project",
      repo: 'https://github.com/emmareimer/palabra_2',
      live: 'https://palabra-2.herokuapp.com/'
    },
    {
      id: 2,
      name: "Jakes JATE",
      short: "IndexDb Note App",
      repo: 'https://github.com/JLewis1995/Jake-s-Text-Editor-JATE',
      live: 'https://jakes-jate.herokuapp.com/'
    },
    {
      id: 3,
      name: "Network-Social",
      short: "Social Network Back-End API App",
      repo: 'https://github.com/JLewis1995/Network-Social',
      live: 'https://github.com/JLewis1995/Network-Social'
    },
    {
      id: 4,
      name: "Swifty Ecommerce Back-End",
      short: "Back-End E-Commerce App",
      repo: 'https://github.com/JLewis1995/Swifty_E-Commerce_Back_End',
      live: 'https://github.com/JLewis1995/Swifty_E-Commerce_Back_End'
    },
    {
      id: 5,
      name: "TrustyEmployeeTracker",
      short: "Company Employee Tracking Database Application",
      repo: 'https://github.com/JLewis1995/TrustyEmployeeTracker',
      live: 'https://github.com/JLewis1995/TrustyEmployeeTracker'
    },
    {
      id: 6,
      name: "README Generator",
      short: "Node.js App",
      repo: 'https://github.com/JLewis1995/README-Generator',
      live: 'https://github.com/JLewis1995/README-Generator'
    },
  ];

  const portStyle = {
      display: 'flex',
      alignItems: 'center',

  }

  return (
      <>
        {projectNames.map((item) => 
        (
            <div key={item.id} className="m-5 card col-3 py-4" style={portStyle}>
              <Project project={item}/>
            </div>
        )
        )}
    </>
  );
}

export default Portfolio;
