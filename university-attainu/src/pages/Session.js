import React, { useState, useEffect } from "react";
import "./pageStyle/Session.css";
import CreateMCQ from "../components/CreateMCQ";
import { CreateSession } from "../components/utility/SessionButtons";
import { BtnZoomDetail } from "../components/utility/SessionButtons";
import MCQ from "../components/MCQ";
import { DangerAlert, SuccessAlert } from "../components/AlertBox";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const Session = () => {
  const [alertMsg, setAlertMsg] = useState(true);
  const [attendanceAlert, setAttendanceAlert] = useState(true);

  const [createSessionAlert, setCreateSessionAlert] = useState(true);
  const [sessionURL, setSessionURL] = useState("");

  const [userType, setUserType] = useState({});
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const history = useHistory();

  // Join Session
  useEffect(() => {
    if (userInfo) {
      fetch("/api/v1/users/joinSession", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      })
        .then((res) => res.json())
        .then((result) => {
          // console.log("result", result);
          setSessionURL(result.session[0]?.sessionLink);
          if (result.session[0]?.sessionLink) {
            setCreateSessionAlert(false)
            setAlertMsg(false);
          } else {
            setAlertMsg(true);
            setCreateSessionAlert(true)
          }
        });
    } else {
      history.push("/");
    }
  }, [userInfo, history]);

  // ==============
  useEffect(() => {
    if (userInfo && userInfo.user) {
      setUserType(userInfo);
    } else {
      history.push("/");
    }
  }, [history, userInfo]);

  const handleCreateAttendance = () => {
    setAttendanceAlert(false);
    return setAlertMsg("Attendance Created Successfully..!!");
  };

  const handleSubmitMCQ = (e) => {
    e.preventDefault();
    console.log("e", e)
  };

  return (
    <div className="SessionContainer">
      <div className="message" hidden={createSessionAlert}>
        <DangerAlert message={"Session Created Successfully..!!"} />
      </div>
      <div className="message" hidden={attendanceAlert}>
        <SuccessAlert alertMsg={alertMsg} />
      </div>
      {userType && (
        <div className="">
          <div className="session">
            {userInfo?.user.role === "user" ? (
              <div className="joinSession">
                <button className="btn btn-warning" disabled={alertMsg}>
                  <a
                    href={sessionURL ? sessionURL : ""}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Join Session
                  </a>
                </button>
              </div>
            ) : (
              ""
            )}
            {/* Enter Zoom details ================================================ */}
            <BtnZoomDetail />
            {/* Create Session ====================================================== */}
            {userInfo?.user.role === "instructor" ? <CreateSession message={"Session Created Successfully..!!"} /> : ""}

            {/* MCQ ==================================================== */}
            {userInfo?.user.role === "instructor" ? (
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
                  <div
                    class="modal-dialog modal-dialog-centered"
                    role="document"
                  >
                    <div class="modal-content">
                      <div class="modal-header ">
                        <h2
                          class="modal-title"
                          style={{ color: "var(--blue)" }}
                          id="exampleModalLabel"
                        >
                          MCQ
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
                      <CreateMCQ/>
                      {/* <form onSubmit={handleSubmitMCQ} method="POST">
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
                      </form> */}
                      {/* / */}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
            {/* Attendance =================================================== */}
            {userInfo?.user.role === "instructor" ? (
              <div className="createAttendance">
                <button
                  onClick={handleCreateAttendance}
                  className="btn btn-warning"
                >
                  Create Attendance
                </button>
              </div>
            ) : (
              ""
            )}
          </div>
          <br />
          <div className="mcq-Area" hidden={false}>
            <MCQ />
          </div>
        </div>
      )}
    </div>
  );
};

export default Session;
