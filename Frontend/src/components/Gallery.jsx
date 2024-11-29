import React from "react";

const Gallery = () => {
  return (
    <div
      className="section py-5"
      style={{
        background: "linear-gradient(to right, #4b2e1e, #8a5a44)",
      }}
    >
      <div className="container">
        <div className="row">
          {/* Left Column: Big photo */}
          <div className="col-lg-6 py-2">
            <div
              className="hover-zoom"
              style={{
                height: "516px",
                borderRadius: "15px",
                overflow: "hidden",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              }}
            >
              <img
                src="/assets/Gallery/2.jpg"
                alt="Big photo"
                className="w-100 h-100 object-fit-cover"
              />
            </div>
          </div>

          {/* Right Column: Small photos */}
          <div className="col-lg-6">
            <div className="row justify-content-around">
              {[1, 3, 4, 5].map((num) => (
                <div className="col-6 px-2 py-2" key={num}>
                  <div
                    className="hover-zoom"
                    style={{
                      height: "250px",
                      borderRadius: "15px",
                      overflow: "hidden",
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    <img
                      src={`/assets/Gallery/${num}.jpg`}
                      alt={`Photo ${num}`}
                      className="w-100 h-100 object-fit-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Hover effect CSS */}
      <style>
        {`
          .hover-zoom {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .hover-zoom:hover {
            transform: scale(1.05);
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
          }
        `}
      </style>
    </div>
  );
};

export default Gallery;
