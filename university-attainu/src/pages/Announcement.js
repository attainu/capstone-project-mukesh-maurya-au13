import React, { useEffect, useState } from "react";
import Announce from "../components/Announce";
import "./pageStyle/Session.css";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
// import { useSelector } from "react-redux";

const Announcement = () => {
  const [userType, setUserType] = useState({});
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  // const history = useHistory();
  const history = useHistory();
  // const userInfo = useSelector((state) => state.userInfo);

  useEffect(() => {
    if (userInfo && userInfo.user) {
      setUserType(userInfo);
    } else {
      history.push("/");
    }
  }, [history, userInfo]);

  return (
    <div className="announce-container">
      <div className="display-6 text-primary m-5 p-2">Announcement</div>
      <Announce />
      <Announce />
      <Announce />
      <Announce />
    </div>
  );
};

export default Announcement;
