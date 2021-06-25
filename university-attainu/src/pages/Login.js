import React, { useState, useEffect } from "react";
import "./pageStyle/Login.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "./../Redux/action/userAction";
import { PATH } from "../config/webPath";

const LoginPage = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { error, userInfo, loading } = userLogin;

  useEffect(() => {
    if (userInfo && userInfo?.user.role === "admin") {
      history.push("/admin");
    } else if (userInfo) {
      history.push(PATH.DASHBOARD);
    } else {
      history.push("/");
    }
  }, [userInfo, history]);

  const postLoginData = (e) => {
    e.preventDefault();
    //dispatch login
    dispatch(login(email, password));
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
          <form method="POST" onSubmit={postLoginData}>
            <input
              name="userName"
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
              // minLength="8"
              maxLength="20"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              // required
            />
            <div className="button">
              <button type="submit" className="btn btn-warning text-white mt-2">
                Submit
              </button>
              <div className="signup">
                <span className="span-style for-login mt-2">New Account?</span>
                <Link to="/signup" className="click1 click2">
                  SignUp
                </Link>
              </div>
            </div>
            <div className="text-white bg-warning text-center">
              {" "}
              {loading && <small>loading...</small>}
            </div>
            <div className="text-white text-center bg-danger">
              {" "}
              {error && <small>{error.message}</small>}
            </div>
          </form>
        </div>

        <div className="login-footer login-footer-heading">
          <span className="span-style for-login">Forget Password?</span>
          <Link to="/forget-pass" className="click1 click2">
            Click here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
