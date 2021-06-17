import React from "react";
import "./style/Attendance.css";
import AttendanceModel from "../../components/students/AttendanceModel";

const Attendance = () => {
  return (
    <div>
      <div className="container row">
        <div className="button">
          <div className="creat-attendance">
            <button type="button" class="btn btn-warning" data-toggle="modal" data-target="#exampleModal">Submit Attendance</button>
          </div>
          {/* Place Model hear */}
          <AttendanceModel/>
        </div>
        <div className="attendance">
          <div className="instructor row">
            <div className="card col-md-4 text-center">
              <div className="card-heading text-primary">
                Instructor Session Attendance
              </div>
              <div className="card-body text-warning display-4">74.05 %</div>
            </div>
            <div className="card col-md-6">
              <div className="card-heading text-center text-primary">
                Your Instructor Session
              </div>
              <div className="card-body mt-4">
                <h5>Avg rating of Last className: 4.65 </h5>
                <h5>Avg rating of Last 10 Classes: 4.50</h5>
              </div>
            </div>
          </div>
          <div className="mentor row">
            <div className="card col-md-4 text-center">
              <div className="card-heading text-primary">
                Mentor Session Attendance
              </div>
              <div className="card-body display-4 text-warning"> 124 / 128</div>
            </div>
            <div className="card col-md-6">
              <div className="card-heading text-center text-primary">
                Your TA Session
              </div>
              <div className="card-body mt-4">
                <h5>Avg rating of Last className: 3.65 </h5>
                <h5>Avg rating of Last 10 Classes: 4.00</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Attendance;
