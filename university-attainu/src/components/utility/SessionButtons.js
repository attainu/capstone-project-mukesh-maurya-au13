import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createSessionAction } from "../../Redux/action/instructorAction";
import {DangerAlert} from "../AlertBox"

export const BtnZoomDetail = () => {
  return (
    <div className="zoomDetails">
      <button className="btn btn-warning">Enter Your Zoom Detail</button>
    </div>
  );
};

// create Session button
export const CreateSession = (props) => {
  const [alertMsg, setAlertMsg] = useState("");
  const createSession = useSelector((state) => state.createSession);
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const { loading, error, createSessionLink } = createSession;
  const [createSessionAlert, setCreateSessionAlert] = useState(true);
  const [sessionURL, setSessionURL] = useState("");
  const dispatch = useDispatch();

  // complete code
  useEffect(() => {
    if (userInfo) {
      if (createSessionLink) {
        setSessionURL("");
      }
    }
  }, [userInfo, createSessionLink]);

  const submitSessionURL = (e) => {
    // write action code
    e.preventDefault();
    dispatch(createSessionAction(sessionURL));
    if (loading === false) {
      setAlertMsg("Session Created Successfully...!!");
    }
  };

  return (
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
                <div className="message" hidden={createSessionAlert}>
                  <DangerAlert message={"Session Created Successfully..!!"} />
                </div>
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
            <form method="POST" onSubmit={submitSessionURL}>
              <div class="modal-body ms-5">
                <div class="mb-3">
                  <label
                    for="recipient-name"
                    class="col-form-label text-danger"
                  >
                    Submit The Meeting Link:
                  </label>
                  <input
                    name="sessionLink"
                    onChange={(e) => setSessionURL(e.target.value)}
                    type="text"
                    class="form-control"
                    id="recipient-name"
                    value={sessionURL}
                    defaultValue=""
                  />
                </div>
              </div>
              <div class="modal-footer">
                <button
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
  );
};
