import React from "react";
import "./style/Assignment.css";

const Assignment = () => {
  return (
    <div className="Assignment-container">
      <div className="table">
        <table className="table table-hover table-striped">
          <thead className="table-primary">
            <tr>
              <th>Date</th>
              <th>Assignment</th>
              <th>Question</th>
              <th>Submit</th>
              <th>Result</th>
              <th>Feedback</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Jun 10, 2021</td>
              <td>Week40 day01</td>
              <td>Question Paper</td>
              <td>Submitted Link</td>
              <td>Result</td>
              <td>Feedback</td>
            </tr>
            <tr>
              <td>Jun 10, 2021</td>
              <td>Week40 day01</td>
              <td>Question Paper</td>
              <td>Submitted Link</td>
              <td>Result</td>
              <td>Feedback</td>
            </tr>
            <tr>
              <td>Jun 10, 2021</td>
              <td>Week40 day01</td>
              <td>Question Paper</td>
              <td>Submitted Link</td>
              <td>Result</td>
              <td>Feedback</td>
            </tr>
          </tbody>
        </table>
      </div>

      <nav aria-label="...">
        <ul className="pagination">
          <li className="page-item disabled">
            <a className="page-link" href="#" tabindex="-1">
              Previous
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              1
            </a>
          </li>
          <li className="page-item active">
            <a className="page-link" href="#">
              2 <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Assignment;
