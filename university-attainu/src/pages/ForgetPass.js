import React from "react";
import "./pageStyle/Login.css";
import {Link} from "react-router-dom";

const ForgetPass = () => {
  return (
    <div className="container-fluid center">
      <div className="container2 center2">
        <div className="logo sub-logo">
          <img
            src="https://res.cloudinary.com/bookshelf/image/upload/v1622876232/AttainuClone/logo_wr8uxh.png"
            className="bbgDoA"
            width="72px"
            height="72px"
          />
          <h1>AttainU</h1>
        </div>
        <div className="input">
          <form action="#">
            <input
              className="form userName"
              type="email"
              placeholder="User Name"
              required
            />
            <div className="button ">
              <button className="btn btn-warning text-white resetPassword">
                {" "}
                Reset Password{" "}
              </button>
            </div>
          </form>
        </div>
        <div className="login-footer login-footer-heading">
          <span className="span-style for-login">For Login</span>
          <Link to="/" className="click1 click2">
            Click here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgetPass;
