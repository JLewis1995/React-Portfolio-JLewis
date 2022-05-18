import React from "react";


// WHEN I view the footer
// THEN I am presented with text or icon links to the developer’s GitHub and LinkedIn profiles, and their profile on a third platform (Stack Overflow, Twitter)

// Acceptance criteria met - could make links logos

export default function Footer() {
  return (
    <div className="container">
    <footer className="flex-wrap  py-3 my-4 border-top">
        <span className="text-muted">© 2022, Jacob L. Lewis</span>
        <a className="m-2" href="https://github.com/JLewis1995" target="_blank">GitHub</a>
        <a className="m-2" href="https://www.linkedin.com/in/jacob-lewis-11312a194/" target="_blank">LinkedIn</a>
        <a className="m-2" href="https://www.youtube.com/channel/UCVZaQtyqhyfH3AEpX-ZxXfw" target="_blank">Youtube?</a>
    </footer>
  </div>
  );
}