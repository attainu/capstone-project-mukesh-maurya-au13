import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "./style/Library.css";
import { SuccessAlert } from "../../components/AlertBox";
// import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import VideoItem from "../../components/VideoItem";
import UploadRecording from "../../components/utility/UploadRecording";

const Library = () => {
  const [data, setData] = useState([]);
  const [alert, setAlert] = useState(true);
  const [video, setVideo] = useState("");
  const history = useHistory();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      fetch("/api/v1/users/getLibrary", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      })
        .then((res) => res.json())
        .then((result) => {
          setData(result.library);
        });
    } else {
      history.push("/");
    }
  }, [userInfo, history]);

  const sendAlert = () => {
    setAlert(false);
    console.log("inside func", alert);
  };
  console.log("out side func", alert);

  const handlePlay = (videoId) => {
    const newVideo = data.filter((i) => i._id === videoId);
    setVideo(newVideo);

    console.log("event clicked", newVideo);
    console.log(newVideo[0].videoLink);
  };

  return (
    <div className="LibraryPage">
      <div className="alert" hidden={alert}>
        <SuccessAlert />
      </div>
      <div className="container-library m-5 d-flex flex-row">
        <div>
          <div className="video-player  d-flex flex-column">
            <div className="col-md-4">
              <iframe
                width="450"
                height="300"
                src={video[0]?.videoLink}
                frameBorder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen="allowFullScreen"
                title="currentPlaying"
              ></iframe>
            </div>
            <div className="VideoTitle">
              <h4>Current Playing...</h4>
              <h5>{video[0]?.videoTitle}</h5>
            </div>
            <div className="uploadVideo mt-2">
              {userInfo?.user.role !== "user" ? (
                <UploadRecording alert={sendAlert} />
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        <div className="video-lib border border-3 p-3 mx-3 bg-secondary">
          <div className="all-video">
            <div className="display-6" style={{ color: "var(--blue)" }}>
              All Lecture sessions
            </div>
            <div className="playlistItem">
              {data.map((item, i) => {
                return <VideoItem key={i} {...item} onPlay={handlePlay} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Library;
