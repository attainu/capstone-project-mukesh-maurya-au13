import React from "react";
import "./style/Test.css";

const TestScore = () => {
  return (
    <div>
      <div className="container">
        <div className="testRank mt-5">
          <div className="col-sm-4 text-center p-4">
            <div className="card">
              <div className="card-header text-primary">Latest Test Rank</div>
              <div className="card-body text-warning display-6"> 3/68 </div>
            </div>
          </div>
          <div className="col-sm-4 text-center p-4">
            <div className="card">
              <div className="card-header text-primary">Overall Test Rank</div>
              <div className="card-body text-warning display-6"> 5/128 </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestScore;
