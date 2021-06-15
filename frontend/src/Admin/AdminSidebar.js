import React from "react";
import { Link } from "react-router-dom";

const AdminSidebar = () => {
  return (
    <div className="admin-sidebar">
      <nav
        className="w3-sidebar w3-collapse w3-white w3-animate-left"
        style={{ zIndex: 3, width: "300px" }}
        id="mySidebar"
      >
        <br />
        <div className="w3-container w3-row">
          <div className="w3-col s4">
            <img
              src="https://i.pinimg.com/236x/64/79/39/647939e2da4a27d126bf47cd0e889cd1.jpg"
              className="w3-circle w3-margin-right"
              style={{ width: "46px" }}
              alt="avatar"
            />
          </div>
          <div className="w3-col s8 w3-bar">
            <span>
              Welcome, <strong>Mike</strong>
            </span>
            <br />
            <Link to="#" className="w3-bar-item w3-button">
              <i className="fa fa-envelope"></i>
            </Link>
            <Link to="#" className="w3-bar-item w3-button">
              <i className="fa fa-user"></i>
            </Link>
            <Link to="#" className="w3-bar-item w3-button">
              <i className="fa fa-cog"></i>
            </Link>
          </div>
        </div>
        <hr />
        <div className="w3-container">
          <h5>Dashboard</h5>
        </div>
        <div className="w3-bar-block">
          <Link
            to="#"
            className="w3-bar-item w3-button w3-padding-16 w3-hide-large w3-dark-grey w3-hover-black"
            onClick="w3_close()"
            title="close menu"
          >
            <i className="fa fa-remove fa-fw"></i>  Close Menu
          </Link>
          <Link to="#" className="w3-bar-item w3-button w3-padding w3-blue">
            <i className="fa fa-users fa-fw"></i>  Overview
          </Link>
          <Link to="#" className="w3-bar-item w3-button w3-padding">
            <i className="fa fa-eye fa-fw"></i>  Views
          </Link>
          <Link to="#" className="w3-bar-item w3-button w3-padding">
            <i className="fa fa-users fa-fw"></i>  Traffic
          </Link>
          <Link to="#" className="w3-bar-item w3-button w3-padding">
            <i className="fa fa-bullseye fa-fw"></i>  Geo
          </Link>
          <Link to="#" className="w3-bar-item w3-button w3-padding">
            <i className="fa fa-diamond fa-fw"></i>  Orders
          </Link>
          <Link to="#" className="w3-bar-item w3-button w3-padding">
            <i className="fa fa-bell fa-fw"></i>  News
          </Link>
          <Link to="#" className="w3-bar-item w3-button w3-padding">
            <i className="fa fa-bank fa-fw"></i>  General
          </Link>
          <Link to="#" className="w3-bar-item w3-button w3-padding">
            <i className="fa fa-history fa-fw"></i>  History
          </Link>
          <Link to="#" className="w3-bar-item w3-button w3-padding">
            <i className="fa fa-cog fa-fw"></i>  Settings
          </Link>
          <br />
          <br />
        </div>
      </nav>
    </div>
  );
};

export default AdminSidebar;
