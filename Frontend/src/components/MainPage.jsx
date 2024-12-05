import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MainPage = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchMainPageData = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          setMessage('You must log in to view this page.');
          return;
        }

        // Make a request to the protected route with the JWT token
        const response = await axios.get('http://localhost:5000/api/mainpage', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setMessage(response.data.message);  // Display success message from the backend
      } catch (error) {
        setMessage('Error: Unable to access the MainPage.');
      }
    };

    fetchMainPageData();
  }, []);

  return (
    <div className="main-page">
      <h1>{message}</h1>
    </div>
  );
};

export default MainPage;
