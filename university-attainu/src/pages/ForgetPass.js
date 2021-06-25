import React, { useState, useEffect } from "react";
import "./pageStyle/Login.css";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { forgot_password } from "../Redux/action/userAction";

const ForgetPass = () => {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  const userRegisterList = useSelector((state) => state.userRegisterList);

  const { userInfo } = userRegisterList;
  console.log(userInfo);

  const postData = (e) => {
    e.preventDefault();
    //dispatch data
    dispatch(forgot_password(email));
    history.push("/");
  };
  
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
          <form method="POST" onSubmit={postData}>
            <input
              className="form userName"
              type="email"
              placeholder="User Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
