import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar2 from "./Navbar2";
import Footer from "./Footer";
import './ProfilePage.css';

export default function ProfilePage() {
  const [activeButton, setActiveButton] = useState("settings");
  const [profilePhoto, setProfilePhoto] = useState(null);
  const navigate = useNavigate();

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
    if (buttonName === "home") navigate("/mainpage");
    else if (buttonName === "listEvent") navigate("/eventlist");
    else if (buttonName === "myEvents") navigate("/myevents");
    else if (buttonName === "settings") navigate("/profile");
  };

  const handlePhotoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setProfilePhoto(URL.createObjectURL(file));
    }
  };

  return (
    <>
      <Navbar2 />
      <div className="main-page-container">
        <div className="side-buttons">
          {/* Buttons for navigation */}
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
            <i className="fas fa-user-cog"></i> Profile
          </button>
        </div>

        <div className="main-content p-5">
          <h2 className="text-center profile-title">
            Service Provider <span>Profile</span>
          </h2>

          <form className="profile-form">
            <div className="form-group photo-upload">
              <label htmlFor="photo">Profile Photo:</label>
              <div className="photo-frame" onClick={() => document.getElementById("photo").click()}>
                {profilePhoto ? (
                  <img src={profilePhoto} alt="Preview" className="photo-preview" />
                ) : (
                  <i className="fas fa-camera"></i>
                )}
              </div>
              <input
                type="file"
                id="photo"
                style={{ display: "none" }}
                onChange={handlePhotoChange}
                accept="image/*"
              />
            </div>

            {/* Other input fields */}
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" placeholder="Enter your full name" />
            </div>

            <div className="form-group">
              <label htmlFor="company">Company Name:</label>
              <input type="text" id="company" placeholder="Enter your company name" />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" placeholder="Enter your email address" />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number:</label>
              <input type="tel" id="phone" placeholder="Enter your phone number" />
            </div>

            <div className="form-group">
              <label htmlFor="service">Service Offered:</label>
              <input type="text" id="service" placeholder="Enter the service you provide" />
            </div>

            <div className="form-group">
              <label htmlFor="location">Location:</label>
              <input type="text" id="location" placeholder="Enter your location" />
            </div>

            <button type="submit" className="profile-submit-button">
              Save Changes
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
