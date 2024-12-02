import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


const EventList = () => {
  const [eventData, setEventData] = useState({
    title: '',
    description: '',
    date: '',
    time: '',
    venue: '',
    budget: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData({
      ...eventData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Event Data:', eventData);
    // You can send the data to your server or API here
  };

  return (
    <>
<Navbar/>
   <div style={{
        background: "linear-gradient(to right, rgb(24 14 8), rgb(138, 90, 68))",
        opacity: 0.97,
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.15)",
        padding:"20px",
      }}>
    <div className="event-form-container " >
      <h2 className="text-center mb-4">Host Your Event</h2>
      <form onSubmit={handleSubmit} className="event-form">
        <div className="form-group mb-3">
          <label htmlFor="title" className="form-label">Event Title</label>
          <input
            type="text"
            id="title"
            name="title"
            className="form-control"
            value={eventData.title}
            onChange={handleChange}
            placeholder="Enter event title"
          />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="description" className="form-label">Event Description</label>
          <textarea
            id="description"
            name="description"
            className="form-control"
            value={eventData.description}
            onChange={handleChange}
            placeholder="Provide details about the event"
            rows="4"
          ></textarea>
        </div>

        <div className="form-row mb-3">
          <div className="col">
            <label htmlFor="date" className="form-label">Event Date</label>
            <input
              type="date"
              id="date"
              name="date"
              className="form-control"
              value={eventData.date}
              onChange={handleChange}
            />
          </div>
          <div className="col">
            <label htmlFor="time" className="form-label">Event Time</label>
            <input
              type="time"
              id="time"
              name="time"
              className="form-control"
              value={eventData.time}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-group mb-3">
          <label htmlFor="venue" className="form-label">Event Venue</label>
          <input
            type="text"
            id="venue"
            name="venue"
            className="form-control"
            value={eventData.venue}
            onChange={handleChange}
            placeholder="Enter event venue"
          />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="budget" className="form-label">Event Budget</label>
          <div className="input-group">
            <span className="input-group-text">₹</span>
            <input
              type="number"
              id="budget"
              name="budget"
              className="form-control"
              value={eventData.budget}
              onChange={handleChange}
              placeholder="Enter estimated budget"
            />
          </div>
        </div>

        <div className="text-center">
          <button type="submit" className="btn btn-primary btn-lg">
            Submit Event
          </button>
        </div>
      </form>
    </div>
    </div>
    <Footer/>

    </>
  );

};

export default EventList;
