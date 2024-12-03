import React, { useEffect, useState, useRef } from "react";

const Services = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.3 } // Trigger when 30% of the section is in view
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

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
      ref={sectionRef}
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
          src="assets/Video/animation.mp4"
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
          className={`fw-bold mb-4 section-heading ${inView ? "animate-heading" : "invisible"}`}
          style={{
            fontSize: "3rem", // Enlarged text
            color: "white",
          }}
        >
          <span style={{ color: "#d29b6e" }}>Get Work Done</span> in Different Categories
        </h2>
        <p
          className={`mb-5 ${inView ? "animate-description" : "invisible"}`}
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
              className={`col-6 col-md-4 col-lg-3 d-flex justify-content-center service-card-container ${inView ? `animate-service-${index}` : "invisible"}`}
            >
              <div
                className="p-4"
                style={{
                  background: "rgba(255, 255, 255, 0.1)",
                  borderRadius: "15px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
                  textAlign: "center",
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

      <style>
        {`
          .invisible {
            opacity: 0;
            transform: translateY(70px);
          }

          /* Smooth Transition for Hover Effects */
          .service-card-container {
            transition: transform 1s ease-out;  /* Slow down hover effect */
          }

          .section-heading, .animate-heading {
            opacity: 0;
            transform: translateY(50px);
            transition: all 1s ease-out; /* Slow down entrance */
          }

          .animate-heading {
            opacity: 1;
            transform: translateY(0);
          }

          .animate-description {
            opacity: 0;
            transform: translateY(50px);
            transition: all 1s ease-out 0.3s; /* Slow down description entrance */
          }

          .animate-description {
            opacity: 1;
            transform: translateY(0);
          }

          /* Staggered animation for each service */
          ${Array.from({ length: 12 }, (_, index) => {
            return `
              .animate-service-${index} {
                animation: fade-in 1.8s ease-out ${index * 0.5}s forwards;
              }
            `;
          }).join("")}

          @keyframes fade-in {
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          /* Hover effect for card */
          .service-card-container:hover {
            transform: translateY(-10px);
          }
        `}
      </style>
    </div>
  );
};

export default Services;
