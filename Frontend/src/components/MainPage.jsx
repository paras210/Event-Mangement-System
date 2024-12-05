import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar2 from "./Navbar2";
import Footer from "./Footer";
import './MainPage.css';

export default function MainPage() {
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
  ];

  const [activeButton, setActiveButton] = useState("home");
  const navigate = useNavigate();

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
    if (buttonName === "myevents") {
      navigate("/myevents");
    }
    else if (buttonName === "profile") {
      navigate("/profile");
    }
  };
  

  const handleListEventClick = () => {
    navigate2("/eventlist");
  };

  const [interestedEvents, setInterestedEvents] = useState({}); // Track button state per event
  const navigate2 = useNavigate();

  const handleInterestedClick = (eventId) => {
    setInterestedEvents((prev) => ({
      ...prev,
      [eventId]: !prev[eventId], // Toggle state
    }));
  };

  return (
    <>
      <Navbar2 />
      <div className="main-page-container">
        {/* Vertical Buttons */}
        <div className="side-buttons">
          <button
            className={`main-button ${activeButton === "home" ? "active" : ""}`}
            onClick={() => handleButtonClick("home")}
          >
            <i className="fas fa-home"></i> Home
          </button>
          <button
            className={`main-button ${activeButton === "listEvent" ? "active" : ""}`}
            onClick={handleListEventClick}
          >
            <i className="fas fa-calendar-plus"></i> List an Event
          </button>
          <button
            className={`main-button ${activeButton === "myevents" ? "active" : ""}`}
            onClick={() => handleButtonClick("myevents")}
          >
            <i className="fas fa-calendar-check"></i> My Events
          </button>
          <button className={`main-button ${activeButton === "profile" ? "active" : ""}`}
            onClick={() => handleButtonClick("profile")}>
            <i className="fas fa-user-cog"></i> Profile
          </button>
        </div>

        {/* Main Content */}
        <div className="main-content">
          <div className="live-events-section text-center">
          <h2
          
          style={{
            fontSize: "2.5rem",
            color: "#2d2d2d", // Dark gray for headings
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          Live <span style={{ color: "#f473c4" }}>Events</span>
        </h2>
            <div className="event-cards-container">
              {events.map((event) => (
                <div className="event-card" key={event.id}>
                  <h3>{event.title}</h3>
                  <p>Hosted by: {event.hostedBy}</p>
                  <p>Location: {event.location}</p>
                  <p>Date: {event.date}</p>
                  <button
                    className={`event-button ${
                      interestedEvents[event.id] ? "participated" : ""
                    }`}
                    onClick={() => handleInterestedClick(event.id)}
                  >
                    {interestedEvents[event.id] ? (
                      <span className="tick">&#10003; Participated</span>
                    ) : (
                      "Participate Now"
                    )}
                  </button>
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
