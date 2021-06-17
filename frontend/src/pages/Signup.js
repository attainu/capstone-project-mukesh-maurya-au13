import React from "react";
import "./pageStyle/Login.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "./../Redux/action/userAction";

const Signup = ({history}) => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const dispatch = useDispatch();
  const userRegisterList = useSelector((state) => state.userRegisterList);
  const { loading, userInfo, error } = userRegisterList;

 useEffect(() => {
   if (userInfo) {
     history.push("/");
   }
 }, [userInfo, history]);

 const postData = (e) => {
   e.preventDefault();
 
   //dispatch login
   dispatch(register(name, mobile, email, password, passwordConfirm));
};
 


  return (
    <>
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
                name="name"
                className="form userName"
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                // required
              />
              <input
                name="mobile"
                className="form userName"
                type="text"
                placeholder="Contact No."
                // min="10"
                // max="10"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                // required
              />
              <input
                name="email"
                className="form userName"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                // required
              />
              <input
                name="password"
                className="form userName"
                type="password"
                placeholder="Password"
                // min="8"
                // max="20"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                // required
              />
              <input
                name="passwordConfirm"
                className="form userName"
                type="password"
                placeholder="Password Confirm"
                // min="8"
                // max="20"
                value={passwordConfirm}
                onChange={(e) => setPasswordConfirm(e.target.value)}
                // required
              />
              <div className="button ">
                <button
                  type="submit"
                  className="btn btn-warning text-white m-2"
                >
                  Submit
                </button>
              </div>
              <div className="text-white bg-warning text-center">
                {" "}
                {loading && <small>loading...</small>}
              </div>
              <div className="text-white text-center bg-danger">
                {error && <small>{error}</small>}
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
    </>
  );
};

export default Signup;
