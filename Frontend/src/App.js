import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import LoginModal from './components/LoginModal';  // Adjust path if necessary
import MainPage from './components/MainPage';      // Adjust path if necessary

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginModal />} />
        <Route path="/mainpage" element={<MainPage />} />
        <Route
          path="/"
          element={
            <div>
              <h1>Welcome to the Event Management</h1>
              <Link to="/login">
                <button>Login</button>  {/* This button will redirect to the Login page */}
              </Link>
            </div>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
