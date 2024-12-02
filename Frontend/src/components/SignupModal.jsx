import React from "react";

const SignupModal = ({ onClose }) => {
  return (
    <div className="modal-backdrop d-flex justify-content-center">
      <div className="signup-modal"> {/* Use a distinct class */}
        <h5>Signup</h5>
        <form>
        <div>
          <button type="button" className="btn btnfrm" style={{
            border:"2px black solid"
          }}>Host</button>
          <button type="button" className="btn btnfrm" style={{
            border:"2px black solid"
          }}>Service Provider</button>
        </div>
          <div class="mb-3">
            <div class="form-floating">
              <input type="text" class="form-control" id="floatingInput" placeholder="Username" />
              <label for="floatingInput">Username</label>
            </div>
          </div>

          <div class="mb-3">
            <div class="form-floating">
              <input type="email" class="form-control" id="floatingInput" placeholder="Email" />
              <label for="floatingInput">Email</label>
            </div>
          </div>
          <div class="mb-3">
            <div class="form-floating">
              <input type="text" class="form-control" id="floatingInput" placeholder="Phone Number" />
              <label for="floatingInput">Phone Number</label>
            </div>
          </div>

          <div class="mb-3">
            <div class="form-floating">
              <input type="password" class="form-control" id="floatingInput" placeholder="Password" />
              <label for="floatingInput">Password</label>
            </div>
          </div>

          <div class="mb-3">
            <div class="form-floating">
              <input type="password" class="form-control" id="floatingInput" placeholder="Confirm Password" />
              <label for="floatingInput">Confirm Password</label>
            </div>
          </div>


          <div className="d-flex justify-content-between">
            <button
              type="submit"
              className="btn btnlog"
              style={{ backgroundColor: "#5c4033" }}
            >
              Signup
            </button>
            <button type="button" className="btn btn-secondary" onClick={onClose}>
              Close
            </button>
          </div>
        </form>
        <a href="/" className="text-secondary text-center">
          Already have an account? Login!
        </a>
      </div>
    </div>
  );
};

export default SignupModal;
