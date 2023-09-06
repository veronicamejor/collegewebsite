// src/components/NavBar.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container">
        <a className="navbar-brand text-danger" href="/">Institute of Software Technologies</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link text-light" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="/about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="/courses">Courses</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;