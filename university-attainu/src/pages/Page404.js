import React from "react";
import "./pageStyle/Page404.css";
import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <div className="page404 bg-dark">
      <div className="container">
        <div className="error">
          <p className="p">4</p>
          <span className="dracula">
            <div className="con">
              <div className="hair"></div>
              <div className="hair-r"></div>
              <div className="head"></div>
              <div className="eye"></div>
              <div className="eye eye-r"></div>
              <div className="mouth"></div>
              <div className="blod"></div>
              <div className="blod blod2"></div>
            </div>
          </span>
          <p className="p">4</p>

          <div className="page-ms">
            <p className="page-msg">
              {" "}
              Oops, the page you're looking for Disappeared{" "}
            </p>
            <button className="go-back bg-warning">
              <Link to="/dashboard"> Go Back </Link>{" "}
            </button>
          </div>
        </div>
      </div>

      <iframe
        style={{ width: 0, height: 0, border: "none" }}
        scrolling="no"
        frameborder="no"
        allow="autoplay"
        src="https://instaud.io/_/2Vvu.mp3"
        title="picturePlaying"
      ></iframe>
    </div>
  );
};

export default Page404;
