import React from "react";

const IntroSection = () => {
  return (
    <div className="intro-section position-relative text-white text-center">
      {/* Background Video */}
      <video
        className="bg-video"
        autoPlay
        loop
        muted
        playsInline
      >
        <source
          src="assets/Video/cheers.mp4" // Replace with a suitable video URL
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Content */}
      <div className="content position-absolute top-50 start-50 translate-middle">
        <h1 className="fw-bold" style={{ textShadow: "2px 2px 5px rgba(0,0,0,0.7)" }}>
          Welcome to EventSync
        </h1>
        <p className="mt-3" style={{ fontSize: "1.5rem", textShadow: "1px 1px 3px rgba(0,0,0,0.5)" }}>
          "Where events come to life! Discover the perfect match for your special occasions."
        </p>
        <div className="mt-4">
  <a
    href="/listevent"
    className="btn mx-2 fw-bold px-4 py-2"
    style={{
      backgroundColor: "#C99B6E", /* Light brown background */
      color: "white",
      fontSize: "1.2rem",
      border: "2px solid #C99B6E", /* Light brown border */
      borderRadius: "30px", /* Rounded edges */
      transition: "background-color 0.3s, color 0.3s",
    }}
    onMouseEnter={(e) => {
      e.target.style.backgroundColor = "#A67C52"; /* Darker light brown */
      e.target.style.color = "white";
    }}
    onMouseLeave={(e) => {
      e.target.style.backgroundColor = "#d29b6e"; /* Light brown */
      e.target.style.color = "white";
    }}
  >
    I'm a Host
  </a>
  <a
    href="/provider"
    className="btn mx-2 fw-bold px-4 py-2"
    style={{
      backgroundColor: "#fff", /* White background */
      color: "#C99B6E", /* Light brown text */
      fontSize: "1.2rem",
      border: "2px solid #C99B6E", /* Light brown border */
      borderRadius: "30px", /* Rounded edges */
      transition: "background-color 0.3s, color 0.3s",
    }}
    onMouseEnter={(e) => {
      e.target.style.backgroundColor = "#f7f7f7"; /* Lighter white */
      e.target.style.color = "#A67C52"; /* Darker light brown */
    }}
    onMouseLeave={(e) => {
      e.target.style.backgroundColor = "#fff"; /* White */
      e.target.style.color = "#d29b6e"; /* Light brown */
    }}
  >
    I'm a Service Provider
  </a>
</div>

      </div>
    </div>
  );
};

export default IntroSection; 