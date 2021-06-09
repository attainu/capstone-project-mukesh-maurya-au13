import React from "react";

const RecentPlaced = () => {
  return (
    <div className="placement row">
      <div className="center-card col-md-12">
        <div className="card">
          <div className="card-header text-center">
            <h4>Mohan Kumar</h4>
          </div>
          <div className="card-body text-center">
            <img
              src="https://bootdey.com/img/Content/avatar/avatar7.png"
              alt="image/profile"
            />
            <div className="about mt-2 p-1">
              <h6>Location: </h6>
              <h6>Company Name: </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentPlaced;
