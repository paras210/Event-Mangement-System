import React, { useEffect, useRef, useState } from "react";

const Para = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  // Intersection Observer to detect when the section scrolls into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="section px-0 py-5  " style={{
      overflow: "hidden",
      backgroundColor: "#f8f9fa",
    }}>
    <div
      ref={sectionRef}
      className="container-lg about-section py-5 px-3"
      
    >
      <div className="row align-items-center">
        {/* Left Section */}
        <div
          className={`col-12 col-md-6 mb-4 mb-md-0 ${
            inView ? "animate-from-bottom" : "invisible"
          }`}
        >
          <h2
            className="about-heading"
            style={{
              fontWeight: "bold",
              fontSize: "2.5rem",
              color: "#343a40",
            }}
          >
            About EventSync
          </h2>
          <p
            className="about-text mt-3"
            style={{
              fontSize: "1.2rem",
              lineHeight: "1.8",
              color: "#6c757d",
            }}
          >
            EventSync is your ultimate partner in organizing, managing, and
            synchronizing events effortlessly. From small gatherings to grand
            celebrations, we ensure everything is seamless and unforgettable.
          </p>
        </div>

        {/* Right Section */}
        <div
          className={`col-12 col-md-6 stats-container ${
            inView ? "animate-from-bottom" : "invisible"
          }`}
        >
          <div className="row text-center">
            {/* Stats Boxes */}
            <div className="col-6 col-md-4 mb-3">
              <div
                className="stat-box p-4 rounded"
                style={{
                  backgroundColor: "#ffffff",
                  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                }}
              >
                <h3
                  className="stat-value mb-2"
                  style={{
                    fontSize: "1.8rem",
                    color: "#007bff",
                    fontWeight: "bold",
                  }}
                >
                  500+
                </h3>
                <p
                  className="stat-label"
                  style={{ fontSize: "1rem", color: "#6c757d" }}
                >
                  Events Hosted
                </p>
              </div>
            </div>
            <div className="col-6 col-md-4 mb-3">
              <div
                className="stat-box p-4 rounded"
                style={{
                  backgroundColor: "#ffffff",
                  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                }}
              >
                <h3
                  className="stat-value mb-2"
                  style={{
                    fontSize: "1.8rem",
                    color: "#28a745",
                    fontWeight: "bold",
                  }}
                >
                  4.8/5
                </h3>
                <p
                  className="stat-label"
                  style={{ fontSize: "1rem", color: "#6c757d" }}
                >
                  User Ratings
                </p>
              </div>
            </div>
            <div className="col-6 col-md-4 mb-3">
              <div
                className="stat-box p-4 rounded"
                style={{
                  backgroundColor: "#ffffff",
                  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                }}
              >
                <h3
                  className="stat-value mb-2"
                  style={{
                    fontSize: "1.8rem",
                    color: "#ffc107",
                    fontWeight: "bold",
                  }}
                >
                  100k+
                </h3>
                <p
                  className="stat-label"
                  style={{ fontSize: "1rem", color: "#6c757d" }}
                >
                  Happy Users
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Inline Styles for Animations */}
      <style>
        {`
          .animate-from-bottom {
            transform: translateY(50px);
            opacity: 0;
            animation: slide-up 1s ease-out forwards;
          }

          .invisible {
            opacity: 0;
          }

          @keyframes slide-up {
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }
        `}
      </style>
    </div>
    </div>
  );
};

export default Para;
