import React from "react";
import "./pageStyle/Login.css";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div class="container-fluid center">
      <div class="container2 center2">
        <div class="logo sub-logo">
          <img
            src="https://res.cloudinary.com/bookshelf/image/upload/v1622876232/AttainuClone/logo_wr8uxh.png"
            class="bbgDoA"
            width="72px"
            height="72px"
          />
          <h1>AttainU</h1>
        </div>
        <div class="input">
          <form action="/">
            <input
              name="Name"
              class="form userName"
              type="text"
              placeholder="Name"
              required
            />
            <input
              name="mobile"
              class="form userName"
              type="tel"
              placeholder="Contact No."
              minlength="10"
              maxlength="10"
              required
            />
            <input
              name="Email"
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
            <div class="button ">
              <button class="btn btn-warning text-white m-2">Submit</button>              
            </div>
          </form>
        </div>
        <div class="login-footer login-footer-heading">
          <span class="span-style for-login">Account exist?</span>
          <Link to="/" class="click1 click2">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
