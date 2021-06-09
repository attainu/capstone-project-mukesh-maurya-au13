import React from "react";
import "./style/Sidebar.css";

const Demo = () => {
  return (
    <div>
      <div class="wrapper">
        {/* <!-- Sidebar  --> */}
        <nav id="sidebar">
          <div class="sidebar-header">
            <img
              src="https://res.cloudinary.com/bookshelf/image/upload/v1622876232/AttainuClone/logo_wr8uxh.png"
              class="bbgDoA"
              width="48px"
              height="48px"
            />{" "}
            AttainU
          </div>

          <ul class="list-unstyled components">
            <li>
              <a href="#">Dashboard</a>
            </li>
            <li>
              <a href="#">Announcement</a>
            </li>
            <li>
              <a
                href="#Student"
                data-toggle="collapse"
                aria-expanded="false"
                class="dropdown-toggle"
              >
                Student
              </a>
              <ul class="collapse list-unstyled" id="Student">
                <li>
                  <a href="#">Attendance</a>
                </li>
                <li>
                  <a href="#">CC/Assignment</a>
                </li>
                <li>
                  <a href="#">Test</a>
                </li>
                <li>
                  <a href="#">Library</a>
                </li>
              </ul>
            </li>
            <li>
              <a
                href="#askDoubts"
                data-toggle="collapse"
                aria-expanded="false"
                class="dropdown-toggle"
              >
                Ask Doubts
              </a>
              <ul class="collapse list-unstyled" id="askDoubts">
                <li>
                  <a href="#">Pending Questions</a>
                </li>
                <li>
                  <a href="#">Resolved Questions</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Session</a>
            </li>
            <li>
              <a href="#">Recent Placements</a>
            </li>
          </ul>

          <ul class="list-unstyled components">
            <li>
              <a href="#">Reward and Referral</a>
            </li>
            <li>
              <a href="#">Discussion Forum</a>
            </li>
            <li>
              <a href="#">Fresh Desk</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Demo;
