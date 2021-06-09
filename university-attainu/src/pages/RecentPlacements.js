import React from "react";

const RecentPlacements = () => {
  return (
    <div className="container">
      <h1>This is Recent Placement Page.</h1>
      <div className="row col-md-6">
        <div className="card d-flex-row">
          <div className="image">
            <img
              src="https://i.pinimg.com/236x/96/5e/7e/965e7e1d7e6b62a1a8170056292a77e3.jpg"
              alt=""
            />
          </div>
          <div className="name p-1">
            <span>
              <h4>Name:Varun Halder </h4>
            </span>
          </div>
          <div className="name">
            <span>Batch: CV Raman</span>
          </div>
          <hr />
          <div className="company">
            <span>Company Name</span>
            <h3>Location: Location </h3>
          </div>
        </div>
        <div className="card ">
          <div className="image">
            <img
              src="https://i.pinimg.com/236x/96/5e/7e/965e7e1d7e6b62a1a8170056292a77e3.jpg"
              alt=""
            />
          </div>
          <div className="name p-1">
            <span>
              <h4>Name:Varun Halder </h4>
            </span>
          </div>
          <div className="name">
            <span>Batch: CV Raman</span>
          </div>
          <hr />
          <div className="company">
            <span>Company Name</span>
            <h3>Location: Location </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentPlacements;
