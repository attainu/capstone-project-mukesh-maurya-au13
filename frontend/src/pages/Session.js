import React from "react";
import "./pageStyle/Session.css";

const Session = () => {
  return (
    <div className="session">
      <button className="btn btn-warning">Join Session</button>
      <button className="btn btn-warning">Enter Your Zoom URL</button>
      <button className="btn btn-warning">Create Session</button>
      <button className="btn btn-warning">Create MCQ</button>
      <button className="btn btn-warning">Create Attendance</button>
    </div>
  );
};

export default Session;
