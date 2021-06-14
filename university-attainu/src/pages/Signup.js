import React from "react";
import "./pageStyle/Login.css";
import { Link } from "react-router-dom";
import {useState} from "react"

const Signup = () => {
  // const [name, setName] = useState("")
  // const [contact, setContact] = useState("")
  // const [email, setEmail] = useState("")
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
          <form action="/signup" method="GET">
            <input
              name="Name"
              className="form userName"
              type="text"
              placeholder="Name"
              required
            />
            <input
              name="mobile"
              className="form userName"
              type="tel"
              placeholder="Contact No."
              minlength="10"
              maxlength="10"
              required
            />
            <input
              name="Email"
              className="form userName"
              type="email"
              placeholder="User Name"
              required
            />
            <input
              name="password"
              className="form userName"
              type="password"
              placeholder="Password"
              minlength="8"
              maxlength="20"
              required
            />
            <div className="button ">
              <button className="btn btn-warning text-white m-2">Submit</button>              
            </div>
          </form>
        </div>
        <div className="login-footer login-footer-heading">
          <span className="span-style for-login">Account exist?</span>
          <Link to="/" className="click1 click2">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
