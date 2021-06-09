import React from "react";
import "./style/Test.css"

const TestFilter = () => {
  return (
    <div>
      <div class="container">
        <nav class="testStick navbar-fixed-top">
          <div class="container-fluid">
            <div class="navbar-header">
              <h4>List of Test</h4>
            </div>
            <div class="nav navbar-nav nav-right">
              <span>Filter</span>
              <select></select>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default TestFilter;
