import React from "react";
import "./MainPage.css";

const MainPage = ({ username = "User" }) => {
  return (
    <div className="main-page">
      {/* Vertical Navbar */}
      <div className="main-sidebar">
        <div className="main-logo">
          <i className="fas fa-calendar-alt"></i>
          <span>Eventify</span>
        </div>
        <nav className="main-nav-items">
          <button className="main-nav-item">
            <i className="fas fa-home"></i>
            Home
          </button>
          <button className="main-nav-item">
            <i className="fas fa-calendar-plus"></i>
            List an Event
          </button>
          <button className="main-nav-item">
            <i className="fas fa-calendar-check"></i>
            My Events
          </button>
          <button className="main-nav-item">
            <i className="fas fa-user-cog"></i>
            Settings
          </button>
          <button className="main-nav-item main-logout">
            <i className="fas fa-sign-out-alt"></i>
            Logout
          </button>
        </nav>
      </div>

      {/* Main Content Area */}
      <div className="main-content">
        <header className="main-content-header">
          <h1>Welcome, {username}!</h1>
        </header>
        <div className="main-content-body">
          <h2>Dashboard</h2>
          <p>Here, you can manage your events seamlessly and effortlessly.</p>
          <div className="main-action-buttons">
            <button className="main-action-btn">
              <i className="fas fa-calendar-plus"></i>
              Create Event
            </button>
            <button className="main-action-btn">
              <i className="fas fa-calendar-check"></i>
              View My Events
            </button>
            <button className="main-action-btn">
              <i className="fas fa-user-edit"></i>
              Edit Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
