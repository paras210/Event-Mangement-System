import React from "react";

const Services = () => {
  const services = [
    "Lighting",
    "DJ Services",
    "Catering",
    "Photography",
    "Decorations",
    "Venue Management",
    "Security Services",
    "Transportation",
    "Sound Systems",
    "Live Performances",
    "Florists",
    "Event Planning",
  ];

  return (
    <div
      className="section pb-5 position-relative"
      style={{
        color: "#fff",
        overflow: "hidden",
      }}
    >
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="position-absolute w-100 h-100"
        style={{
          objectFit: "cover",
          zIndex: "-2",
        }}
      >
        <source
          src="https://videocdn.cdnpk.net/videos/b617a712-7e46-567e-8013-b4240ecbc023/horizontal/previews/clear/large.mp4?token=exp=1732891910~hmac=5ee30ffb003d91377b2a3b255df2a5938e583c87c802b94d15a52f775e5418a8"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Brown Overlay */}
      <div
        className="position-absolute w-100 h-100"
        style={{
          backgroundColor: "rgba(75, 46, 30, 0.6)", // Brown color with opacity
          zIndex: "-1",
        }}
      ></div>

      {/* Services Content */}
      <div className="container text-center py-5">
        <h2
          className="fw-bold mb-4"
          style={{
            fontSize: "3rem", // Enlarged text
            color: "white",
          }}
        >
          <span style={{ color: "#d29b6e" }}>Get Work Done</span> in Different Categories
        </h2>
        <p
          className="mb-5"
          style={{
            fontSize: "1.2rem",
            fontFamily: "'Roboto', sans-serif",
            lineHeight: "1.8",
          }}
        >
          From grand celebrations to intimate gatherings, EventSync ensures all
          your event needs are met with precision and creativity.
        </p>
        <div className="row gy-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="col-6 col-md-4 col-lg-3 d-flex justify-content-center"
            >
              <div
                className="p-4"
                style={{
                  background: "rgba(255, 255, 255, 0.1)",
                  borderRadius: "15px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
                  textAlign: "center",
                  transition: "transform 0.3s ease",
                  width: "100%",
                }}
              >
                <h5
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: "1.2rem",
                    color: "#fff",
                  }}
                >
                  {service}
                </h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
