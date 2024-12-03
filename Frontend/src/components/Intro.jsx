import React from 'react';

const Intro = () => {
  return (
    <div className="container-fluid intro-container d-flex align-items-center py-0 px-0">
      {/* Left Section */}
      <div className="row w-100 mx-0 h-100">
        <div className="left-section text-container col-lg-6">
          <h1 className="intro-heading">Welcome, <br></br>to EventSync</h1>
          <p className="intro-text">
            Your one-stop solution for managing and synchronizing unforgettable events.
          </p>
          <button
            className="btn intro-btn py-0 px-0"
            style={{
              backgroundColor: 'black',
              color: 'white',
              fontWeight: 'bold',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '50px',
              cursor: 'pointer',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '50%', // Reduced width
              transition: 'all 0.3s ease',
              position: 'relative', // Added relative positioning for the button to position the arrow
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = 'white';
              e.target.style.color = 'black';
              e.target.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
              // Find the arrow element and animate only if it's present
              const arrow = e.target.querySelector('span');
              if (arrow) {
                arrow.style.transform = 'translateX(5px)';
              }
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = 'black';
              e.target.style.color = 'white';
              e.target.style.boxShadow = 'none';
              // Reset arrow position if it's present
              const arrow = e.target.querySelector('span');
              if (arrow) {
                arrow.style.transform = 'translateX(0)';
              }
            }}
          >
            Explore Now
            <span className='fs-3'
             style={{ marginLeft: '8px',transition: 'transform 0.3s ease' }}>&#8594;</span> {/* Right arrow */}
          </button>
        </div>

        {/* Right Section */}
        <div className="right-section col-lg-6 p-0 position-relative overflow-hidden">
          <img 
            src="assets/Gallery/intro.jpg" 
            alt="Event" 
            className="img-fluid w-100 h-100 object-fit-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Intro;
