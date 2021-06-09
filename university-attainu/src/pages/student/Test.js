import React from "react";
import TestFilter from "../../components/TestFilter";
import TestScore from "../../components/TestScore";

const Test = () => {
  return (
    <dic className="container">
      <div className="test-score">
        <TestScore />
      </div>
      <div className="test-filter">
        <TestFilter />
      </div>
    </dic>
  );
};

export default Test;
