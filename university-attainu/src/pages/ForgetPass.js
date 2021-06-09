import React from "react";
import "./pageStyle/Login.css";
import {Link} from "react-router-dom";

const ForgetPass = () => {
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
          <form action="#">
            <input
              class="form userName"
              type="email"
              placeholder="User Name"
              required
            />
            <div class="button ">
              <button class="btn btn-warning text-white resetPassword">
                {" "}
                Reset Password{" "}
              </button>
            </div>
          </form>
        </div>
        <div class="login-footer login-footer-heading">
          <span class="span-style for-login">For Login</span>
          <Link to="/" class="click1 click2">
            Click here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgetPass;
