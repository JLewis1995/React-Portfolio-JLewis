import React from "react";

function NavTabs({ currentPage, handlePageChange }) {

  const style = {
    background: {
      backgroundColor: '#999999'
    },
    text: {
      color: '#2747fd'
    }
  }


  return (
    <ul style={style.background} className="nav nav-tabs bg-opacity-50">
      <li className="nav-item font-weight-bold rounded">
        <a
          href="#about"
          onClick={() => handlePageChange("About")}
          className={currentPage === "About" ? "nav-link active" : "nav-link"}
          style={style.text}
        >
          About
        </a>
      </li>
      <li className="nav-item font-weight-bold rounded">
        <a
          href="#portfolio"
          onClick={() => handlePageChange("Portfolio")}
          className={currentPage === "Portfolio" ? "nav-link active" : "nav-link"}
          style={style.text}
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item font-weight-bold rounded">
        <a
          href="#resume"
          onClick={() => handlePageChange("Resume")}
          className={currentPage === "Resume" ? "nav-link active" : "nav-link"}
          style={style.text}
        >
          Resume
        </a>
      </li>
      <li className="nav-item font-weight-bold rounded">
        <a
          href="#contact"
          onClick={() => handlePageChange("Contact")}
          className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
          style={style.text}
        >
          Contact
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
