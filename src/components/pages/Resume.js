import React from "react";


// WHEN I am presented with the Resume section
// THEN I see a link to a downloadable resume and a list of the developer’s proficiencies

// TODO - Downloadable resume

export default function Resume() {
  const proficiencies = [
    {
    id: 1,
    name: 'Enterprise Application Administration',
  },
  {
    id: 2,
    name: 'HTML'
  },
  {
    id: 3,
    name: 'CSS'
  },
  {
    id: 4,
    name: 'Javascript'
  },
  {
    id: 5,
    name: 'jQuery'
  },
  {
    id: 6,
    name: 'Express'
  },
  {
    id: 7,
    name: 'Node'
  },
  {
    id: 8,
    name: 'MySQL'
  },
  {
    id: 9,
    name: 'MongoDB'
  },
  {
    id: 10,
    name: 'GraphQL'
  },
  {
    id: 11,
    name: 'React',
  },
  {
    id: 12,
    name: 'RESTful APIs'
  }
]

return (
  <div className="m-5">
      <a href={require('../images/resume.pdf')} download="Jacob Lewis Resume">Downlad my resume here!</a>
    <h2>Proficiencies</h2>
    <>
      <ul>
        {proficiencies.map((item) =>
        (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </>
  </div>
);
}
