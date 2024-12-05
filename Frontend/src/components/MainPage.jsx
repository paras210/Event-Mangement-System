import React from "react";
import "./MainPage.css";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const MainPage = ({ username = "User" }) => {
  return (
    <>
      <div className="main-page">
        {/* Vertical Navbar */}
        <div className="main-sidebar">
          <div className="main-logo">
            <i className="fas fa-calendar-alt"></i>
            <span>Eventify</span>
          </div>
          <nav className="main-nav-items">
            <Link to="/" className="main-nav-item text-decoration-none text-white">
              <i className="fas fa-home"></i>
              <span>Home</span>
            </Link>
            <Link to="/eventlist" className="main-nav-item text-decoration-none text-white">
              <i className="fas fa-calendar-plus"></i>
              <span>List an Event</span>
            </Link>
            <Link to="/myevents" className="main-nav-item text-decoration-none text-white">
              <i className="fas fa-calendar-check"></i>
              <span>My Events</span>
            </Link>
            <Link to="/settings" className="main-nav-item text-decoration-none text-white">
              <i className="fas fa-user-cog"></i>
              <span>Settings</span>
            </Link>
          </nav>
        </div>

        {/* Main Content Area */}
        <div className="main-content">
          {/* Logout Button */}
          <button className="main-logout-btn">
            <i className="fas fa-sign-out-alt"></i>
            Logout
          </button>

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
      <Footer />
    </>
  );
};

export default MainPage;
