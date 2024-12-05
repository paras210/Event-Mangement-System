import React, { useState } from "react";
import Navbar2 from "./Navbar2";
import Footer from "./Footer";
import './MainPage.css';


export default function MainPage(){
  const events = [
    {
      id: 1,
      title: "Coding Workshop",
      hostedBy: "John Doe",
      location: "Online",
      date: "12th December 2024",
    },
    {
      id: 2,
      title: "Tech Talk",
      hostedBy: "Jane Smith",
      location: "Tech Hub",
      date: "14th December 2024",
    },
    {
      id: 3,
      title: "Web Development Bootcamp",
      hostedBy: "Alex Brown",
      location: "Convention Center",
      date: "20th December 2024",
    },
    // Add more events here as needed
  ];

  // State for active button
  const [activeButton, setActiveButton] = useState("home");

  // Function to handle button clicks
  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <>
      <Navbar2 />
      <div className="main-page-container">
        {/* Vertical Buttons - Stay on the left */}
        <div className="side-buttons">
          <button
            className={`main-button ${activeButton === "home" ? "active" : ""}`}
            onClick={() => handleButtonClick("home")}
          >
            <i className="fas fa-home"></i> Home
          </button>
          <button
            className={`main-button ${activeButton === "listEvent" ? "active" : ""}`}
            onClick={() => handleButtonClick("listEvent")}
          >
            <i className="fas fa-calendar-plus"></i> List an Event
          </button>
          <button
            className={`main-button ${activeButton === "myEvents" ? "active" : ""}`}
            onClick={() => handleButtonClick("myEvents")}
          >
            <i className="fas fa-calendar-check"></i> My Events
          </button>
          <button
            className={`main-button ${activeButton === "settings" ? "active" : ""}`}
            onClick={() => handleButtonClick("settings")}
          >
            <i className="fas fa-user-cog"></i> Settings
          </button>
        </div>

        {/* Main Content on the Right */}
        <div className="main-content">
          {/* Live Events Section */}
          <div className="live-events-section">
            <h2>Live Events</h2>
            <div className="event-cards-container">
              {/* Map over events and display them */}
              {events.map((event) => (
                <div className="event-card" key={event.id}>
                  <h3>{event.title}</h3>
                  <p>Hosted by: {event.hostedBy}</p>
                  <p>Location: {event.location}</p>
                  <p>Date: {event.date}</p>
                  <button>View Details</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
