import React from "react";
import "./pageStyle/Login.css";
import { Link } from "react-router-dom";

const ForgetPassword = () => {
  return (
    <div className="container-fluid center">
      <div className="container2 center2">
        <div className="logo sub-logo">
          <img
            src="https://res.cloudinary.com/bookshelf/image/upload/v1622876232/AttainuClone/logo_wr8uxh.png"
            className="bbgDoA"
            width="72px"
            height="72px"
            alt="logo"
          />
          <h1>AttainU</h1>
        </div>
        <div className="input">
          <form action="/login">
            <input
              name="newPassword"
              className="form userName"
              type="password"
              placeholder="New Password"
              minlength="8"
              maxlength="20"
              required
            />
            <input
              name="confirmPassword"
              className="form userName"
              type="password"
              placeholder="Confirm Password"
              minlength="8"
              maxlength="20"
              required
            />
            <div className="button">
              <button className="btn btn-warning text-white mt-2">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="login-footer login-footer-heading">
          <span className="span-style for-login">Create New Account?</span>
          <Link to="/signup" className="click1 click2">
            Click here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
