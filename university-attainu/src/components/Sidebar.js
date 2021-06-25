import React from "react";
import "./style/Sidebar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import DashboardSharpIcon from "@material-ui/icons/DashboardSharp";
import VolumeUpIcon from "@material-ui/icons/VolumeUp";
import DeviceHubIcon from "@material-ui/icons/DeviceHub";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import RecordVoiceOverIcon from "@material-ui/icons/RecordVoiceOver";
import EmojiTransportationIcon from "@material-ui/icons/EmojiTransportation";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import HearingIcon from "@material-ui/icons/Hearing";
import SortByAlphaIcon from "@material-ui/icons/SortByAlpha";

const Sidebar = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  return (
    <div className="wrapper">
      {/* <!-- Sidebar  --> */}
      <nav id="sidebar">
        <div className="sidebar-header">
          <img
            src="https://res.cloudinary.com/bookshelf/image/upload/v1622876232/AttainuClone/logo_wr8uxh.png"
            className="bbgDoA"
            width="48px"
            height="48px"
            alt="brand-logo"
          />{" "}
          AttainU
        </div>

        <ul className="list-unstyled components">
          <li className="active">
            <Link to="/dashboard">
              <DashboardSharpIcon /> Dashboard
            </Link>
          </li>
          <li>
            <Link to="announcement">
              <VolumeUpIcon />
              Announcement
            </Link>
          </li>
          <li>
            <a
              href="#Student"
              data-toggle="collapse"
              aria-expanded="false"
              className="dropdown-toggle"
            >
              <AccountTreeIcon /> Student
            </a>
            <ul className="collapse list-unstyled" id="Student">
              {userInfo?.user.role === "user" ? (
                <li>
                  <Link to="/attendance">Attendance</Link>
                </li>
              ) : (
                ""
              )}
              <li>
                <Link to="/assignment">CC/Assignment</Link>
              </li>
              <li>
                <Link to="/test">Test</Link>
              </li>
              <li>
                <Link to="/library">Library</Link>
              </li>
            </ul>
          </li>
          <li>
            <a
              href="#askDoubts"
              data-toggle="collapse"
              aria-expanded="false"
              className="dropdown-toggle"
            >
              <DeviceHubIcon /> Ask Doubts
            </a>
            <ul className="collapse list-unstyled" id="askDoubts">
              <li>
                <Link to="/pending-ques">Pending Questions</Link>
              </li>
              <li>
                <Link to="resolve-ques">Resolved Questions</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/session">
              <RecordVoiceOverIcon /> Session
            </Link>
          </li>
          <li>
            <Link to="recent-placements">
              <EmojiTransportationIcon /> Recent Placements
            </Link>
          </li>
        </ul>

        <ul className="list-unstyled components">
          <li>
            <Link to="/reward">
              {" "}
              <MonetizationOnIcon /> Reward and Referral
            </Link>
          </li>
          <li>
            <Link to="/https://forum.attainu.com/">
              <SortByAlphaIcon /> Discussion Forum
            </Link>
          </li>
          <li>
            <Link to="/fresh-desk">
              {" "}
              <HearingIcon /> Fresh Desk
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
