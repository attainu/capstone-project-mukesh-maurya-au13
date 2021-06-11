import React from "react";
import "./style/Library.css";

const Library = () => {
  return (
    <div className="container m-5 d-flex">
      <div className="video-frame border border-primary">
        <div className="video-player border border-info">
          <iframe src="" frameborder="0"></iframe>
        </div>
        <div className="current-playing border border-success">
          <div className="badge badge-primary">Current Playing</div>
        </div>
      </div>
      <div className="video-lib border border-3 p-2 m-3">
        <div className="all-video">
          <div className="display-6">All Lecture sessions</div>
        </div>
      </div>
    </div>
  );
};

export default Library;
