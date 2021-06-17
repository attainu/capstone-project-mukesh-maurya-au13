import React from "react";
import "./style/Test.css"

const TestFilter = () => {
  return (
    <div>
      <div className="container">
        <nav className="testStick navbar-fixed-top">
          <div className="container-fluid">
            <div className="navbar-header">
              <h4>List of Test</h4>
            </div>
            <div className="nav navbar-nav nav-right">
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
