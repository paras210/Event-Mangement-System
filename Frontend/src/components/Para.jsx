import React from "react";

const Para = () => {
  return (
    <div
      className="section"
      style={{
        background: "linear-gradient(to right, rgb(37 22 14), #8a5a44)",
        color: "#fff",
      }}
    >
      <div className="container py-4">
      <h2
                    className="fw-bold mb-4"
                    style={{
                        fontSize: "3rem", // Enlarged text
                        color: "white", // White color for first part
                    }}
                >
                    <span style={{ color: "#d29b6e" }}>Make it real</span> with EventSync
                </h2>
        <p
          className="mb-0"
          style={{
            fontSize: "1.3rem", // Increased font size
            fontFamily: "'Poppins', sans-serif", // Changed font style
            lineHeight: "1.8", // Improved readability
          }}
        >
          EventSync is a smart platform designed to simplify event management.
          It helps users plan, organize, and participate in events effortlessly
          while ensuring seamless communication and collaboration. Tailored for
          both small and large-scale gatherings, EventSync offers intuitive
          features for creating impactful experiences and fostering real-time
          engagement.
        </p>
      </div>
    </div>
  );
};

export default Para;
