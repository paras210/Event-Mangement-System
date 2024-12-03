import React from "react";

const Footer = () => {
  return (
    <footer
      className="footer-section pb-0 pt-5"
      style={{
        background: "linear-gradient(to right, rgb(4 2 1), rgb(37 24 17))", // Updated to match theme colors
        color: "#fff",
        padding: "60px 0",
        fontFamily: "'Poppins', sans-serif",
        overflowX: "hidden", // Prevent horizontal scroll
      }}
    >
      <div className="container" id="contact">
        {/* Footer Top Section */}
        <div className="row">
          <div className="col-md-4">
            <h4>EventSync</h4>
            <p>Your ultimate platform for event planning, management, and unforgettable experiences.</p>
          </div>
          <div className="col-md-4"></div>
          <div className="col-md-4 text-start">
            <h5>Contact Info</h5>
            <p>Email: support@eventsync.com</p>
            <p>Phone: +1 (800) 123-4567</p>
            <p>Address: 123 Event St, Celebration City</p>
            {/* Social Media Icons moved here */}
            <div>
              <a href="https://facebook.com" className="text-white me-3">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://twitter.com" className="text-white me-3">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://instagram.com" className="text-white">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Footer Bottom Section */}
      <div className="row justify-content-center mt-5">
        <div className="col-md-12 text-center py-3 color px-0">
          <p className="mb-0">&copy; 2024 EventSync. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
