import React, { useState, useEffect} from "react";
import "./pageStyle/Login.css";
import {useParams, useHistory} from "react-router-dom";
import { useDispatch, useSelector} from "react-redux";
import { resetPassword } from "../Redux/action/userAction";

const ResetPassword = () => {

  const history = useHistory();
  const dispatch = useDispatch();
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [msg, setMsg] = useState(null);
  const [loading, setLoading] = useState(false);
  let {token} = useParams();
  
  const postData = (e) => {
    e.preventDefault();
    console.log("data posted");
    dispatch(resetPassword(password, passwordConfirm, token));
    setLoading(true)
    if(loading === true) {
      setTimeout(() => {
        setLoading(false);
        setMsg("Password changed");
      }, 100);
    }
    if(loading === false){
      setTimeout(() => {
        history.push('/');
        
      }, 2000);
    }
  }

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
          <form method="PATCH" onSubmit={postData}>
            <input
              name="newPassword"
              className="form userName"
              type="password"
              placeholder="Enter New Password"
              minLength="8"
              maxLength="20"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <input
              name="confirmPassword"
              className="form userName"
              type="password"
              placeholder="Enter New Confirm Password"
              minLength="8"
              maxLength="20"
              value={passwordConfirm}
              onChange={(e) => setPasswordConfirm(e.target.value)}
              required
            />
            <div className="button">
              <button type="submit" className="btn btn-warning text-white mt-2">
                Submit
              </button>
            </div>
            {(loading === true)  ? (<div className="text-white bg-warning text-center">
              <small>loading...</small>
             </div>) :
              (<div className="text-white text-center bg-success">
                <small>{msg}</small>
              </div>) }
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

export default ResetPassword;
