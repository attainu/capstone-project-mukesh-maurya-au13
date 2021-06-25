import React from "react";

const RecentPlaced = (props) => {
  console.log("props", props);
  return (
    <div className="placement row">
      <div className="center-card col-md-12">
        <div className="card">
          <div className="card-header text-center">
            <h4>{props.student.name}</h4>
          </div>
          <div className="card-body text-center">
            <img
              src={
                props.student.image
                  ? props.student.image
                  : "https://bootdey.com/img/Content/avatar/avatar7.png"
              }
              alt="profile"
            />
            <div className="about mt-2 p-1">
              <h6>Location: {props.student.location}</h6>
              <h6>Background: {props.student.background}</h6>
              <h6>Company Name:{props.student.companyName} </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentPlaced;
