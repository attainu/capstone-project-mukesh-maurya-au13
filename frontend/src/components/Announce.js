import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAnnounce, postAnnounce } from "../Redux/action/userAction";

const Announce = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [announcement, setAnnouncement] = useState("");
  const [message, setMessage] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  const postAnnouncement = useSelector((state) => state.postAnnouncement);
  const getAnnouncement = useSelector((state) => state.getAnnouncement);
  const userLogin = useSelector((state) => state.userLogin);

  const { loading, announcementList } = postAnnouncement;

  const { announcements } = getAnnouncement;

  const { userInfo } = userLogin;

 

  useEffect(() => {
    if (userInfo.user.role === "admin") {
      setIsAdmin(true);
    }
    if (announcementList) {
      setName("");
      setDesignation("");
      setAnnouncement("");
    }
  }, [announcementList, userInfo, dispatch]);

  useEffect(() => {
    dispatch(getAnnounce());
  }, [dispatch]);

  const postAnnouncementData = (e) => {
    e.preventDefault();
    dispatch(postAnnounce(name, designation, announcement));
    setMessage("Added Successfully");
  };
  console.log(announcements);

  return (
    <>
      {isAdmin ? (
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
      ) : (
        <div className="w3-container announce">
          <div className="w3-row">
            <div className="w3-col m10 w3-container">
              {/* {announceList.map((item, i) => {
                return (
                  <div key={i}>
                    <div className="w3-col m2 text-center">
                      <img
                        className="w3-circle"
                        src="https://i.pinimg.com/236x/bc/1d/f2/bc1df2e06ecd79f29ea45c86fbf95397.jpg"
                        style={{ width: "96px", height: "96px" }}
                        alt="avatar"
                      />
                    </div>
                    <h4>
                      {item.name}
                      <span className="w3-opacity w3-medium">
                        {item.createdAt}
                      </span>
                    </h4>
                    <h4>{item.designation}</h4>
                    <p>{item.announcement}</p>
                    <br />
                  </div>
                );
              })} */}
            </div>
          </div>
          <hr />
        </div>
      )}
    </>
  );
};

export default Announce;
