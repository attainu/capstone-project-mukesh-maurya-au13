import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { postAnnounce } from "../Redux/action/userAction";

const Announce = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [announcement, setAnnouncement] = useState("");
  const [message, setMessage] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  const postAnnouncement = useSelector((state) => state.postAnnouncement);
  // const getAnnouncement = useSelector((state) => state.getAnnouncement);
  const userLogin = useSelector((state) => state.userLogin);
  // console.log(getAnnouncement)
  const { loading, announcementList } = postAnnouncement;

  // const { announcements } = getAnnouncement;
  const { userInfo } = userLogin;


  useEffect(() => {
    if (userInfo && userInfo.user) {
      if (announcementList) {
        setName("");
        setDesignation("");
        setAnnouncement("");
      }
    } else {
      history.push("/");
    }
  }, [userInfo, announcementList, history]);

  const postAnnouncementData = (e) => {
    e.preventDefault();
    dispatch(postAnnounce(name, designation, announcement));
    setMessage("Added Successfully");
  };
  // console.log(announcements);

  return (
    <>
      <div className="input">
        <form method="POST" onSubmit={postAnnouncementData}>
          <input
            name="name"
            className="form userName"
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            // required
          />
          <input
            name="designation"
            className="form userName"
            type="text"
            placeholder="Designation"
            value={designation}
            onChange={(e) => setDesignation(e.target.value)}
            // required
          />
          <textarea
            name="userName"
            className="form userName mt-5"
            rows="15"
            columns="15"
            type="text"
            placeholder="Enter the announcement"
            value={announcement}
            onChange={(e) => setAnnouncement(e.target.value)}
            // required
          />

          <div className="button">
            <button type="submit" className="btn btn-warning text-white mt-2">
              Submit
            </button>
          </div>
        </form>
        <div className="text-white bg-warning text-center">
          {" "}
          {loading && <small>loading...</small>}
        </div>

        <div className="text-white text-center bg-success">
          {message && <small>{message}</small>}
        </div>
      </div>
    </>
  );
};

export default Announce;
