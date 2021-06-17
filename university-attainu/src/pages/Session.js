import React, { useState } from "react";
import "./pageStyle/Session.css";
import CreateMCQ from "../components/CreateMCQ";
import MCQ from "../components/MCQ";
import { DangerAlert, SuccessAlert } from "../components/AlertBox";

const Session = () => {
  const [alertMsg, setAlertMsg] = useState("");
  const [attendanceAlert, setAttendanceAlert] = useState(true);
  const [createSessionAlert, setCreateSessionAlert] = useState(true);

  const handleCreateAttendance = () => {
    setAttendanceAlert(false);
    return setAlertMsg("Attendance Created Successfully..!!");
  };

  const handleCreateSession = () => {
    setCreateSessionAlert(false);
    return setAlertMsg("Session Started..!!");
  };
  return (
    <div className="SessionContainer">
      <div className="message" hidden={createSessionAlert}>
        <DangerAlert alertMsg={alertMsg} />
      </div>
      <div className="message" hidden={attendanceAlert}>
        <SuccessAlert alertMsg={alertMsg} />
      </div>
      <div className="">
        <div className="session">
          <div className="joinSession">
            <button className="btn btn-warning">
              <a
                href="https:/www.google.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join Session
              </a>
            </button>
          </div>

          {/* Enter Zoom details ================================================ */}
          <div className="zoomDetails">
            <button className="btn btn-warning">Enter Your Zoom Detail</button>
          </div>

          {/* Create Session ====================================================== */}
          <div className="createMCQ">
            <button
              type="button"
              class="btn btn-warning"
              data-toggle="modal"
              data-target="#CreateSession"
            >
              Create Session
            </button>
            <div
              class="modal fade"
              id="CreateSession"
              tabindex="-1"
              role="dialog"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                  <div class="modal-header ">
                    <h2
                      class="modal-title"
                      style={{ color: "var(--blue)" }}
                      id="exampleModalLabel"
                    >
                      Start Session
                      <h6>Please submit the meeting invitation link. </h6>
                    </h2>

                    <button
                      type="button"
                      class="close bg-danger text-white"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <form>
                    <div class="modal-body ms-5">
                      <div class="mb-3">
                        <label
                          for="recipient-name"
                          class="col-form-label text-danger"
                        >
                          Submit The Meeting Link:
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="recipient-name"
                        />
                      </div>
                    </div>
                    <div class="modal-footer">
                      <button
                        onClick={handleCreateSession}
                        type="submit"
                        name="Submit Session"
                        class="btn btn-warning leftButton"
                      >
                        Start Session
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/* MCQ ==================================================== */}

          <div className="createMCQ">
            <button
              type="button"
              class="btn btn-warning"
              data-toggle="modal"
              data-target="#createMCQ"
            >
              Create MCQ
            </button>
            <div
              class="modal fade"
              id="createMCQ"
              tabindex="-1"
              role="dialog"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                  <div class="modal-header ">
                    <h2
                      class="modal-title"
                      style={{ color: "var(--blue)" }}
                      id="exampleModalLabel"
                    >
                      MCQ
                      <h6>Please select the correct One. </h6>
                    </h2>

                    <button
                      type="button"
                      class="close bg-danger text-white"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <form action=" " method="POST">
                    <div class="modal-body mx-5">
                      <CreateMCQ />
                    </div>
                    <div class="modal-footer">
                      <button
                        type="submit"
                        name="Submit Attendance"
                        class="btn btn-warning leftButton"
                      >
                        Create MCQ
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/* Attendance =================================================== */}

          <div className="createAttendance">
            <button
              onClick={handleCreateAttendance}
              className="btn btn-warning"
            >
              Create Attendance
            </button>
          </div>
        </div>
        <br />
        <div className="mcq-Area" hidden={false}>
          <MCQ />
        </div>
      </div>
    </div>
  );
};

export default Session;
