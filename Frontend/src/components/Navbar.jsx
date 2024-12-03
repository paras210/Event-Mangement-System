import React from 'react';

const Navbar = ({onLoginClick}) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-gradient">
      <div className="container">
        {/* Brand Logo */}
        <a className="navbar-brand fw-bold fs-3" href="#">EventSync</a>

        {/* Toggler for Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <a className="nav-link text-uppercase px-3 hover-effect" href="#services">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-uppercase px-3 hover-effect" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-uppercase px-3 hover-effect" href="#reviews">Reviews</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-uppercase px-3 hover-effect" href="#contact">Contact Us</a>
            </li>
            <li className="nav-item">
              <button className="btn custom-btn ms-3" onClick={onLoginClick}>Login</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
