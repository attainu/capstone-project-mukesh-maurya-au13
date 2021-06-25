import "./style/MCQ.css";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const CreateMCQ = () => {
  // const [mcqInput, setMcqInput] = useState({});
  const [inputs, setInputs] = useState({});

  const handleInputChange=(e)=>{
    e.persist()
    setInputs(inputs=>({...inputs, [e.target.name]:e.target.value}))
  }
  const handleSubmitMCQ = (e) => {
    e.preventDefault();
    console.log("e", e);
    console.log("Inputs=>", inputs);
  };

  return (
    <form onSubmit={handleSubmitMCQ} method="POST">
      <div class="modal-body mx-5">
        <div className="CreateMCQ">
          <div className="question ml-sm-5 pl-sm-5 pt-2">
            <div className="py-2 h5">
              <b>Q. :</b>{" "}
              <div class="form-floating mt-2">
                <textarea
                  onChange={handleInputChange}
                  name="ques"
                  class="form-control"
                  placeholder="Leave a Question here"
                  id="floatingTextarea2"
                  cols="50"
                  style={{ height: "100px" }}
                ></textarea>
                <label for="floatingTextarea2">Question </label>
              </div>
            </div>
            {/* Options ====================================== */}
            <div
              className="ml-md-3 ml-sm-3 pl-md-5 pt-sm-0 pt-3 d-flex flex-column"
              id="options"
            >
              Options
              <div class="input-group flex-nowrap mb-1">
                <span class="input-group-text" id="addon-wrapping">
                  A
                </span>
                <input
                  onChange={handleInputChange}
                  name="A"
                  type="text"
                  class="form-control"
                  placeholder="option"
                  aria-label="option"
                  aria-describedby="addon-wrapping"
                />
              </div>
              <div class="input-group flex-nowrap mb-1">
                <span class="input-group-text" id="addon-wrapping">
                  B
                </span>
                <input
                  onChange={handleInputChange}
                  name="B"
                  type="text"
                  class="form-control"
                  placeholder="option"
                  aria-label="option"
                  aria-describedby="addon-wrapping"
                />
              </div>
              <div class="input-group flex-nowrap mb-1">
                <span class="input-group-text" id="addon-wrapping">
                  C
                </span>
                <input
                  onChange={handleInputChange}
                  name="C"
                  type="text"
                  class="form-control"
                  placeholder="option"
                  aria-label="option"
                  aria-describedby="addon-wrapping"
                />
              </div>
              <div class="input-group flex-nowrap">
                <span class="input-group-text" id="addon-wrapping">
                  D
                </span>
                <input
                  onChange={handleInputChange}
                  name="D"
                  type="text"
                  class="form-control"
                  placeholder="option"
                  aria-label="option"
                  aria-describedby="addon-wrapping"
                />
              </div>
            </div>

            {/* Correct Answer =================== */}
            <h6>Select Correct Options</h6>
            <div className="correctAnswer border-2 m-1">
              <div class="form-check form-check-inline">
                <input
                  onChange={handleInputChange}
                  name="ansA"
                  class="form-check-input"
                  type="checkbox"
                  id="inlineCheckbox1"
                  value="A"
                />
                <label class="form-check-label" for="inlineCheckbox1">
                  A
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  onChange={handleInputChange}
                  name="ansB"
                  class="form-check-input"
                  type="checkbox"
                  value="B"
                />
                <label class="form-check-label" for="inlineCheckbox2">
                  B
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  onChange={handleInputChange}
                  name="ansC"
                  class="form-check-input"
                  type="checkbox"
                  value="C"
                />
                <label class="form-check-label" for="inlineCheckbox3">
                  C{" "}
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  onChange={handleInputChange}
                  name="ansD"
                  class="form-check-input"
                  type="checkbox"
                  value="D"
                />
                <label class="form-check-label" for="inlineCheckbox3">
                  D{" "}
                </label>
              </div>
            </div>
          </div>
        </div>
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
  );
};

export default CreateMCQ;
