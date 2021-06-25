// import React from "react";
// import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
// import { library } from "../Redux/action/userAction";
import {library} from "../../Redux/action/userAction";

const UploadRecording = (props) => {
  console.log("inside component", props)
  const history = useHistory();
  const dispatch = useDispatch();
  const [videoLink, setVideoLink] = useState("");
  const [videoTitle, setVideoTitle] = useState("");
  const [videoSub_Title, setVideoSub_Title] = useState("");
  const [message, setMessage] = useState(null);
  const videoLibrary = useSelector((state) => state.videoLibrary);
  const { loading, videoData, error } = videoLibrary;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      if (videoData) {
        setVideoLink("");
        setVideoTitle("");
        setVideoSub_Title("");
      }
    } else {
      history.push("/");
    }
  }, [userInfo, history, videoData]);

  const postData = (e) => {
    e.preventDefault();
    dispatch(library(videoLink, videoTitle, videoSub_Title));
    if (loading === false) {
      setMessage("Successfully uploaded");
    }
  };

  return (
    
    <div class="btn-group dropup pt-4">
      <button
        type="button"
        class=" btn btn-danger dropdown-toggle px-5 py-2"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Upload Video
      </button>
      <div class="dropdown-menu p-3 VideoMenu">
        <form method="POST" onSubmit={postData}>
          <div class="form-group">
            <label for="videoLink">Video Link</label>
            <input
              type="text"
              class="form-control"
              id="videoLink"
              value={videoLink}
              placeholder="video link"
              onChange={(e) => setVideoLink(e.target.value)}
              required
            />
          </div>
          <div class="form-group mt-2">
            <label for="title">Video Title</label>
            <input
              type="text"
              class="form-control"
              id="title"
              placeholder="Title"
              value={videoTitle}
              onChange={(e) => setVideoTitle(e.target.value)}
              required
            />
          </div>
          <div class="form-group mt-2">
            <label for="sub-title">Sub Title</label>
            <input
              type="text"
              class="form-control"
              id="sub-title"
              placeholder="Sub-title"
              value={videoSub_Title}
              onChange={(e) => setVideoSub_Title(e.target.value)}
              required
            />
          </div>
          <button type="submit" onClick={props.sendAlert} class="btn btn-warning mt-2">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default UploadRecording;
