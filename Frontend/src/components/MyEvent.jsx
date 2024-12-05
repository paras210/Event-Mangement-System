import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar2 from "./Navbar2";
import Footer from "./Footer";
import './MyEvent.css';

export default function MyEvent() {
  const [activeButton, setActiveButton] = React.useState("myEvents");
  const navigate = useNavigate();

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
    if (buttonName === "home") {
      navigate("/mainpage");
    } else if (buttonName === "listEvent") {
      navigate("/eventlist");
    }
    else if (buttonName === "profile") {
      navigate("/profile");
    }
  };

  const liveEvent = {
    title: "Community Clean-Up",
    host: "Green Earth Foundation",
    location: "Central Park",
    date: "2024-12-10",
    description: "Join us for a community clean-up and make a difference!",
    interestedPeople: [
      { name: "Alice Johnson", role: "Volunteer", rating: 4.5 },
      { name: "Bob Smith", role: "Coordinator", rating: 4.8 },
      { name: "Carol Davis", role: "Supporter", rating: 4.2 },
    ],
  };

  const completedEvents = [
    {
      title: "Charity Marathon 2024",
      host: "City Sports Club",
      location: "Riverside Track",
      date: "2024-11-20",
      description: "A marathon to raise funds for local charities.",
    },
    {
      title: "Tech Fair 2024",
      host: "Tech Community",
      location: "Innovation Hub",
      date: "2024-09-15",
      description: "Showcasing the latest advancements in technology.",
    },
  ];

  const deleteLiveEvent = () => {
    console.log("Live event deleted");
  };

  const deleteCompletedEvent = (index) => {
    console.log(`Completed event ${index + 1} deleted`);
  };

  return (
    <>
      <Navbar2 />
      <div className="main-page-container">
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
          <button className="main-button active">
            <i className="fas fa-calendar-check"></i> My Events
          </button>
          <button className={`main-button ${activeButton === "profile" ? "active" : ""}`}
            onClick={() => handleButtonClick("profile")}>
            <i className="fas fa-user-cog"></i> Profile
          </button>
        </div>

        <div className="main-content p-5">
          <h2 className="text-center" style={{ fontSize: "2.5rem", color: "#2d2d2d", fontFamily: "'Poppins', sans-serif" }}>
            My <span style={{ color: "#f473c4" }}>Events</span>
          </h2>

          {/* Live Events Section */}
          <div className="live-events-section mb-5">
            <h3 className="section-title">Live</h3>
            <div className="live-event-card">
              <h4 className="event-title">{liveEvent.title}</h4>
              <p className="event-details"><strong>Host:</strong> {liveEvent.host}</p>
              <p className="event-details"><strong>Location:</strong> {liveEvent.location}</p>
              <p className="event-details"><strong>Date:</strong> {liveEvent.date}</p>
              <p className="event-description">{liveEvent.description}</p>

              <div className="interested-people-section">
                <h5>People Interested</h5>
                <div className="interested-people-cards">
                  {liveEvent.interestedPeople.map((person, index) => (
                    <div key={index} className="person-card">
                      <h6 className="person-name">{person.name}</h6>
                      <p className="person-role">{person.role}</p>
                      <p className="person-rating">⭐ {person.rating}</p>
                    </div>
                  ))}
                </div>
              </div>

              <button className="delete-live-button" onClick={deleteLiveEvent}>
                <i className="fas fa-trash"></i> Delete
              </button>
            </div>
          </div>

          {/* Completed Events Section */}
          <div className="completed-events-section">
            <h3 className="section-title">Completed Events</h3>
            <div className="completed-events">
              {completedEvents.map((event, index) => (
                <div key={index} className="completed-event-card">
                  <h4 className="event-title">{event.title}</h4>
                  <p className="event-details"><strong>Host:</strong> {event.host}</p>
                  <p className="event-details"><strong>Location:</strong> {event.location}</p>
                  <p className="event-details"><strong>Date:</strong> {event.date}</p>
                  <p className="event-description">{event.description}</p>
                  <button className="delete-completed-button" onClick={() => deleteCompletedEvent(index)}>
                    <i className="fas fa-trash"></i>
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
