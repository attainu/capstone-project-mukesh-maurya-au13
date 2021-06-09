import React from "react";
import "./style/Test.css";

const TestScore = () => {
  return (
    <div>
      <div class="container">
        <div class="testRank mt-5">
          <div class="col-sm-4 text-center p-4">
            <div class="card">
              <div class="card-header text-primary">Latest Test Rank</div>
              <div class="card-body text-warning display-6"> 3/68 </div>
            </div>
          </div>
          <div class="col-sm-4 text-center p-4">
            <div class="card">
              <div class="card-header text-primary">Overall Test Rank</div>
              <div class="card-body text-warning display-6"> 5/128 </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestScore;
