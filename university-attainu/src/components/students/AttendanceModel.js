import React from "react";
import "./studStyle/AttendanceModel.css";
import HoverRating from "./Rating";
const AttendanceModel = () => {
  return (
    // <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog " role="document">
        <div class="modal-content">
          <div class="modal-header ">
            <h2
              class="modal-title"
              style={{ color: "var(--blue)" }}
              id="exampleModalLabel"
            >
              Lecture Attendance
            </h2>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          {/* <h2 className="text-danger "> Attendance Marked</h2> */}
          <form action="/attendance/submit" method="POST">
            <div class="modal-body mx-5">
              <HoverRating />
              {/* <div className="star">
              </div> */}
              <textarea
                rows="4"
                cols="25"
                name="comment"
                form="usrForm"
                placeholder="Instructor Feedback..."
                className="border-none text-center mt-4"
                required
              />
              {/* <div className="instructorFeedback">
              </div> */}
              <textarea
                rows="4"
                cols="25"
                name="comment"
                form="usrForm"
                placeholder="Topic covered..."
                className="border-none text-center mt-4"
                required
              />
              {/* <div className="topicCovered">
                  </div> */}
              <div class="modal-footer">
                <button
                  type="submit"
                  name="Submit Attendance"
                  class="btn btn-warning leftButton"
                >
                  Submit Attendance
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AttendanceModel;
