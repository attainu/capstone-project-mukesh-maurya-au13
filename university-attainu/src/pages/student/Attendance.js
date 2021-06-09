import React from "react";
import "./style/Attendance.css";

const Attendance = () => {
  return (
    <div>
      <div class="attendance">
        <div class="instructor row">
          <div class="card col-md-4 text-center">
            <div class="card-heading text-primary">
              Instructor Session Attendance
            </div>
            <div class="card-body text-warning display-4">74.05 %</div>
          </div>
          <div class="card col-md-7">
            <div class="card-heading text-center text-primary">
              Your Instructor Session
            </div>
            <div class="card-body mt-4">
              <h5>Avg rating of Last Class: 4.65 </h5>
              <h5>Avg rating of Last 10 Classes: 4.50</h5>
            </div>
          </div>
        </div>
        <div class="mentor row">
          <div class="card col-md-4 text-center">
            <div class="card-heading text-primary">
              Mentor Session Attendance
            </div>
            <div class="card-body display-4 text-warning"> 124 / 128</div>
          </div>
          <div class="card col-md-7">
            <div class="card-heading text-center text-primary">
              Your TA Session
            </div>
            <div class="card-body mt-4">
              <h5>Avg rating of Last Class: 3.65 </h5>
              <h5>Avg rating of Last 10 Classes: 4.00</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Attendance;
