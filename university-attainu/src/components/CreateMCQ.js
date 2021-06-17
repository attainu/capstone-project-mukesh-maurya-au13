import React from "react";
import "./style/MCQ.css";

const CreateMCQ = () => {
  return (
    <div className="CreateMCQ">
      {/* <div className="container mt-sm-5 my-1"> */}
      <div className="question ml-sm-5 pl-sm-5 pt-2">
        <div className="py-2 h5">
          <b>Q.1 :</b>{" "}
          <textarea
            type="text"
            rows="5"
            column="50"
            placeholder="Write Question here..."
            className="from-control text-primary mt-2"
          />
        </div>
        <div className="ml-md-3 ml-sm-3 pl-md-5 pt-sm-0 pt-3" id="options">
          <label className="options">
          Nonprofit Owner or Employee  <input type="radio" name="radio" />
            <span className="checkmark"></span>
          </label>
          <label className="options">
            Nonprofit Owner or Employee <input type="radio" name="radio" />
            <span className="checkmark"></span>{" "}
          </label>
          <label className="options">
            Journalist or Activist <input type="radio" name="radio" />
            <span className="checkmark"></span>{" "}
          </label>{" "}
          <label className="options">
            Other <input type="radio" name="radio" />{" "}
            <span className="checkmark"></span>{" "}
          </label>{" "}
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default CreateMCQ;
