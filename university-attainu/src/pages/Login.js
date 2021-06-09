import React from "react";
import "./pageStyle/Login.css";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div class="container-fluid center">
      <div class="container2 center2">
        <div class="logo sub-logo">
          <img
            src="https://res.cloudinary.com/bookshelf/image/upload/v1622876232/AttainuClone/logo_wr8uxh.png"
            class="bbgDoA"
            width="72px"
            height="72px"
            alt="logo"
          />
          <h1>AttainU</h1>
        </div>
        <div class="input">
          <form action="/dashboard">
            <input
              name="userName"
              class="form userName"
              type="email"
              placeholder="User Name"
              required
            />
            <input
              name="password"
              class="form userName"
              type="password"
              placeholder="Password"
              minlength="8"
              maxlength="20"
              required
            />
            <div class="button">
              <button class="btn btn-warning text-white mt-2">Submit</button>
              <div className="signup">
                <span class="span-style for-login mt-2">New Account?</span>
                <Link to="/signup" class="click1 click2">
                  SignUp
                </Link>
              </div>
            </div>
          </form>
        </div>
        <div class="login-footer login-footer-heading">
          <span class="span-style for-login">Forget Password?</span>
          <Link to="/forget-pass" class="click1 click2">
            Click here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
