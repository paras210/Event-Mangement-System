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
    <div className="section px-0" style={{
      overflow: "hidden",
      backgroundColor: "#f8f9fa",
      minHeight: "100vh",
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
          <h2 id="about"
            className="about-heading"
            style={{
              fontWeight: "bold",
              fontSize: "2.5rem",
              color: "#343a40",
              padding:"100px",
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
              inView ? "animate-from-bottom delay-2" : "invisible"
            }`}
          >
            <div className="row text-center">
              {/* Stats Boxes */}
              {[
                { value: "500+", label: "Events Hosted", color: "#007bff" },
                { value: "4.8/5", label: "User Ratings", color: "#28a745" },
                { value: "100k+", label: "Happy Users", color: "#ffc107" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className={`col-6 col-md-4 mb-3 ${
                    inView ? `animate-from-bottom delay-${index + 3}` : "invisible"
                  }`}
                >
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
                        color: stat.color,
                        fontWeight: "bold",
                      }}
                    >
                      {stat.value}
                    </h3>
                    <p
                      className="stat-label"
                      style={{ fontSize: "1rem", color: "#6c757d" }}
                    >
                      {stat.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Inline Styles for Animations */}
        <style>
          {`
            .animate-from-bottom {
              transform: translateY(50px);
              opacity: 0;
              animation: slide-up 0.8s ease-out forwards;
            }

            .invisible {
              opacity: 0;
            }

            .delay-1 {
              animation-delay: 0.2s;
            }
            .delay-2 {
              animation-delay: 0.4s;
            }
            .delay-3 {
              animation-delay: 0.6s;
            }
            .delay-4 {
              animation-delay: 0.8s;
            }
            .delay-5 {
              animation-delay: 1s;
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
