import React from "react";
import "./style/Library.css";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import VideoItem from "../../components/VideoItem";

const Library = () => {
  return (
    <div className="container-library m-5 d-flex">
      <div className="video-frame" style={{ background: "var(--blue)" }}>
        <div className="video-player bg-white">
          <div className="col-md-4">
            <iframe
              width="450"
              height="300"
              src="https://res.cloudinary.com/bookshelf/video/upload/v1623904235/How_to_Pretend_Like_a_Pro_Hacker_ztla3l.mp4"
              frameBorder="0"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen="allowFullScreen"
            ></iframe>
          </div>
        </div>
        <div className="currentPlaying">
          <div className="text-white text-center ">
            <h4>Current Playing.... </h4>
            <h5>Week01 Day01</h5>
          </div>
        </div>
      </div>
      <div className="video-lib border border-3 p-3 mx-3 bg-secondary">
        <div className="all-video">
          <div className="display-6" style={{ color: "var(--blue)" }}>
            All Lecture sessions
          </div>
          <div className="playlistItem">
            <VideoItem />
            <VideoItem />
            <VideoItem />
            <VideoItem />
            <VideoItem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Library;
