import React from "react";
import "./style/MCQ.css";

const MCQ = () => {
  return (
    <div className="MCQ">
      <div class="markMCQContainer mt-sm-5 my-1">
        <div class="question ml-sm-5 pl-sm-5 pt-2">
          <div class="py-2 h5">
            <b>Q1. which option best describes your job role?</b>
          </div>
          <div class="ml-md-3 ml-sm-3 pl-md-5 pt-sm-0 pt-3" id="options">
            {" "}
            <label class="options">
              Small Business Owner or Employee{" "}
              <input type="radio" name="radio" />{" "}
              <span class="checkmark"></span>{" "}
            </label>{" "}
            <label class="options">
              Nonprofit Owner or Employee <input type="radio" name="radio" />{" "}
              <span class="checkmark"></span>{" "}
            </label>{" "}
            <label class="options">
              Journalist or Activist <input type="radio" name="radio" />{" "}
              <span class="checkmark"></span>{" "}
            </label>{" "}
            <label class="options">
              Other <input type="radio" name="radio" />{" "}
              <span class="checkmark"></span>{" "}
            </label>{" "}
          </div>
        </div>
        <div class="d-flex align-items-center pt-3">
          <div id="prev">
            {" "}
            <button class="btn btn-warning">Submit</button>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MCQ;
