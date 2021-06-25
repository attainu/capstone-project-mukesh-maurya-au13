import React, { useState, useEffect } from "react";
import "./pageStyle/Session.css";
import RecentPlaced from "../components/RecentPlaced";
import axios from "axios";
import { useSelector } from "react-redux";
import {useHistory} from "react-router-dom";

const RecentPlacements = () => {
  const [placedStudents, setPlacedStudents] = useState([]);
  const [useType, setUserType] = useState([])
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const history = useHistory()

  useEffect(() => {
    if (userInfo && userInfo.user) {
      setUserType(userInfo);
    } else {
      history.push("/");
    }
  }, [history, userInfo]);
  
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/v1/users/getPlacements", {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${userInfo.token}`,
        },
      })
      .then((res) => {
        setPlacedStudents(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container recentPlacement">
      {placedStudents.map((item) => (
        <RecentPlaced key={item._id} student={item} />
      ))}
    </div>
  );
};

export default RecentPlacements;
