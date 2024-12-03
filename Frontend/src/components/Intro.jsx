import React from 'react';

const Intro = () => {
  return (
    <div className="intro-container d-flex align-items-center">
      {/* Left Section */}
      <div className="left-section text-container">
        <h1 className="intro-heading">Welcome to EventSync</h1>
        <p className="intro-text">
          Your one-stop solution for managing and synchronizing unforgettable events.
        </p>
        <button className="btn intro-btn">Explore Now</button>
      </div>

      {/* Right Section */}
      <div className="right-section rounded-container">
        <img
          src="https://via.placeholder.com/300" /* Replace with your image URL */
          alt="Event"
          className="intro-image"
        />
      </div>
    </div>
  );
};

export default Intro;
