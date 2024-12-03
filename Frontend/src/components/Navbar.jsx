import React from "react";

const Navbar = ({ onLoginClick , onSignClick}) => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark"
      style={{
        background: "linear-gradient(to right, rgb(24, 14, 8), rgb(138, 90, 68))",
        opacity: 0.97,
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.15)",
      }}
    >
      <div className="container sticky-top">
        <a
          className="navbar-brand d-flex align-items-center text-white fw-bold fs-3"
          href="/"
        >
          <img
            src="logo.png" // Replace with your logo file
            alt="Logo"
            className="me-2"
            style={{ width: "40px", height: "40px", borderRadius: "50%" }}
          />
          EventSync
        </a>
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
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto"></ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <button
                className="btn btn-light mx-2 fw-bold stylish-btn"
                onClick={onLoginClick}
              >
                Login
              </button>
            </li>
            <li className="nav-item">
              <button
                className="btn mt-2 btn-outline-light fw-bold stylish-btn"
                onClick={onSignClick}
              >
                Signup
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
