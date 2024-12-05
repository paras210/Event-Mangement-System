import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";


const EventList = () => {
  const [events, setEvents] = useState([]);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const [formData, setFormData] = useState({
    title: "",
    budget: "",
    description: "",
    time: "",
    date: "",
    guests: "",
  });

  // Navbar Smooth Scroll Behavior
//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;

//       if (Math.abs(lastScrollY - currentScrollY) > 10) {
//         setIsNavbarVisible(currentScrollY < lastScrollY);
//         setLastScrollY(currentScrollY);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [lastScrollY]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEvents([...events, formData]);
    setFormData({
      title: "",
      budget: "",
      description: "",
      time: "",
      date: "",
      guests: "",
    });
  };

  return (
    <>
      {/* Navbar */}
      <div className={`main-sidebar ${isNavbarVisible ? "" : "hidden"}`} style={{
        height:"100vh",
      }}>
        <div className="main-logo">
          <i className="fas fa-calendar-alt"></i>
          <span>Eventify</span>
        </div>
        <nav className="main-nav-items">
          <Link to="/" className="main-nav-item text-decoration-none">
            <i className="fas fa-home"></i>
            <span>Home</span>
          </Link>
          <Link to="/eventlist" className="main-nav-item text-decoration-none">
            <i className="fas fa-calendar-plus"></i>
            <span>List an Event</span>
          </Link>
          <Link to="/myevents" className="main-nav-item text-decoration-none">
            <i className="fas fa-calendar-check"></i>
            <span>My Events</span>
          </Link>
          <Link to="/settings" className="main-nav-item text-decoration-none">
            <i className="fas fa-user-cog"></i>
            <span>Settings</span>
          </Link>
        </nav>
      </div>

      {/* Logout Button */}
      <button className="logout-btn">Logout</button>

      {/* Website Heading */}
      <h1 className="website-title">Welcome to Eventify</h1>

      {/* Main Content */}
      <div className="event-list-container">
        {/* <h2 className="section-title">Organize Your Event</h2> */}
        <form className="event-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="title"
              placeholder=" "
              value={formData.title}
              onChange={handleChange}
              required
            />
            <label>Event Title</label>
          </div>
          <div className="form-group">
            <input
              type="number"
              name="budget"
              placeholder=" "
              value={formData.budget}
              onChange={handleChange}
              required
            />
            <label>Budget (in $)</label>
          </div>
          <div className="form-group">
            <textarea
              name="description"
              placeholder=" "
              value={formData.description}
              onChange={handleChange}
              required
            ></textarea>
            <label>Small Description</label>
          </div>
          <div className="form-group">
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
            />
            <label>Event Time</label>
          </div>
          <div className="form-group">
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
            <label>Event Date</label>
          </div>
          <div className="form-group">
            <input
              type="number"
              name="guests"
              placeholder=" "
              value={formData.guests}
              onChange={handleChange}
              required
            />
            <label>Number of Guests</label>
          </div>
          <button type="submit" className="submit-button">
            Add Event
          </button>
        </form>

        <div className="event-cards">
          {events.map((event, index) => (
            <div key={index} className="event-card">
              <h3>{event.title}</h3>
              <p>
                <strong>Date:</strong> {event.date} | <strong>Time:</strong> {event.time}
              </p>
              <p>
                <strong>Budget:</strong> ${event.budget}
              </p>
              <p>
                <strong>Guests:</strong> {event.guests}
              </p>
              <p className="description">{event.description}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EventList;
