import React, { useState } from "react";

const LoginModal = ({ onClose }) => {
  const [isLogin, setIsLogin] = useState(true); 

  return (
    <div className="modal-backdrop d-flex justify-content-center align-items-center">
      <div className="login-modal p-4">
        <div className="toggle-buttons d-flex justify-content-around mb-4">
          <button
            className={`toggle-btn ${isLogin ? "active" : ""}`}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={`toggle-btn ${!isLogin ? "active" : ""}`}
            onClick={() => setIsLogin(false)}
          >
            Sign Up
          </button>
        </div>
        <h5 className="text-center">{isLogin ? "Login" : "Sign Up"}</h5>
        <form>
          <div className="mb-3">
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                id="floatingUsername"
                placeholder="Username"
              />
              <label htmlFor="floatingUsername">Username</label>
            </div>
          </div>
          
          {!isLogin && (
            <div className="mb-3">
              <div className="form-floating">
                <input
                  type="email"
                  className="form-control"
                  id="floatingEmail"
                  placeholder="Email"
                />
                <label htmlFor="floatingEmail">Email</label>
              </div>
            </div>
          )}
          {!isLogin && (
            <div className="mb-3">
              <div className="form-floating">
                <input
                  type="email"
                  className="form-control"
                  id="floatingEmail"
                  placeholder="Email"
                />
                <label htmlFor="floatingNumber">Phone Number</label>
              </div>
            </div>
          )}
          {!isLogin && (
            <div className="mb-3">
              <div className="form-floating">
                <input
                  type="email"
                  className="form-control"
                  id="floatingEmail"
                  placeholder="Email"
                />
                <label htmlFor="floatingPass">Password</label>
              </div>
            </div>
          )}
          <div className="mb-3">
            <div className="form-floating">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
              />
              <label htmlFor="floatingCnfrmPass">Confirm Password</label>
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <button
              type="submit"
              className="btn btnlog"
              style={{ backgroundColor: "#5c4033", color: "#fff" }}
            >
              {isLogin ? "Login" : "Sign Up"}
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
