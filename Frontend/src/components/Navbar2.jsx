import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar2 = () => {
  const navigate = useNavigate();

  const Move = () => {
    navigate("/main");
  };

  return (
    <nav className="navbar2 navbar2-expand-lg navbar2-light bg-gradient">
      <div className="container d-flex align-items-center">
        {/* Logo on the Left Corner */}
        <div className="navbar2-brand-container">
          <a className="navbar2-brand" href="#">
            <i className="fas fa-calendar-check"></i> EventSync
          </a>
        </div>

        {/* Logout Button */}
        <div className="logout-container">
          <button className="logout-button">
            <i className="fas fa-sign-out-alt"></i> Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar2;
