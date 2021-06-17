import React from "react";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";

const VideoItem = () => {
  return (
    <div className="card p-0 m-2">
      <div className="card-body row d-flex ">
        <div className="video-icon col-sm-2 mx-4">
          <PlayCircleFilledIcon />
        </div>
        <div className="video-info col-sm-8">
          <h4>Week01 Day01</h4>
          <p>Introduction to Hacking</p>
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
