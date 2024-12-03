import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';


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

    const navigate = useNavigate();

    const backhome = () => {
        navigate("/");
    };

    return (
        <>
            <div
                style={{
                    width: "100%",
                    height: "100vh",
                    background: "linear-gradient(to right, rgb(37 22 14), #8a5a44)",
                    paddingTop: "15px",

                }}>

                <div
                    className="navbar fs-1 d-flex justify-content-center fw-bold shadow-lg"
                    style={{
                        padding: "30px",
                        // marginTop:"5px",
                        borderRadius: "20px",
                        background: "linear-gradient(135deg, #4e342e, #6d4c41)",
                        boxShadow: "0 8px 20px rgba(0, 0, 0, 0.4)",
                        maxWidth: "90%",
                        margin: "auto",
                        fontFamily: "'Playfair Display', serif",
                        textAlign: "center",
                        letterSpacing: "1px",
                        color: "#fff",
                    }}
                >
                    EventSync
                </div>

                <div style={{
                    background: "linear-gradient(to right, rgb(24 14 8), rgb(138, 90, 68))",
                    opacity: 0.97,
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.15)",
                    padding: "20px",
                }}>
                    <div>
                        <i className="bi bi-arrow-left-short"></i>
                        <button className='btn btn-secondary ' onClick={backhome}>
                            Go Back
                        </button>
                    </div>
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
                <Footer />
            </div>

        </>
    );

};

export default EventList;
