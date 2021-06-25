import React from "react";
// import { fetchUser } from "../Redux/action/userAction";
import AdminSidebar from "./AdminSidebar";
// import {connect} from "react-redux";
// import { useState, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";

const Users = () => {
  
  console.log("user tab");
  return (
    <div>
      <div className="w3-bar w3-top w3-black w3-large" style={{ zIndex: 4 }}>
        <button
          className="w3-bar-item w3-button w3-hide-large w3-hover-none w3-hover-text-light-grey"
          onClick="w3_open()"
        >
          <i className="fa fa-bars"></i>  Menu
        </button>
        <span className="w3-bar-item w3-right">Logo</span>
      </div>
      <AdminSidebar />
      <div
        className="w3-main"
        style={{ marginLeft: "300px", marginTop: "43px" }}
      >
        <div className="table">
          <table className="table table-strip table-hover">
            <thead>
              <tr>
                <th>User Id</th>
                <th>Name</th>
                <th>Status</th>
                <th>Role</th>
                <th>Edit</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                {/* <h1>{console.log("++++++",props.userList)}</h1> */}
                <td>Mukesh</td>
                <td>Mukesh</td>
                <td>Mukesh</td>
                <td>Mukesh</td>
                <td>Mukesh</td>
                <td>Mukesh</td>
              </tr>
            </tbody>
          </table>
          <button
            // onClick={() => dispatch(fetchUser())}
            className="btn btn-success"
          >
            get user
          </button>
        </div>
      </div>
    </div>
  );
};
export default Users;
