import React from "react";

const LoginModal = ({ onClose }) => {
  return (
    <div className="">
    <div className="modal-backdrop d-flex justify-content-center">
      <div className="login-modal">
        <h5>Login</h5>
        <form>
        <div class="mb-3">
  <div class="form-floating">
    <input type="text" class="form-control" id="floatingInput" placeholder="Username"/>
    <label for="floatingInput">Username</label>
  </div>
</div>

<div class="mb-3">
  <div class="form-floating">
    <input type="password" class="form-control" id="floatingInput" placeholder="Username"/>
    <label for="floatingInput">Password</label>
  </div>
</div>

          <div className="d-flex justify-content-between">
            <button type="submit" className="btn btnlog " style={{
              backgroundColor:"#5c4033"
            }}>
              Submit
            </button>
            <button type="button" className="btn btn-secondary"  onClick={onClose}>
              Close
            </button>
          </div>
        </form>
        <a href="/" className="text-secondary text-center">New User? Sign up </a>
      </div>
      
    </div>
    </div>
  );
};

export default LoginModal;
