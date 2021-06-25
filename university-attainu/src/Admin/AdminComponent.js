import React from "react";
import { Link } from "react-router-dom";

const AdminComponent = () => {
  return (
    <div className="admin">
      <div className="w3-bar w3-top w3-black w3-large" style={{ zIndex: 4 }}>
        <button
          className="w3-bar-item w3-button w3-hide-large w3-hover-none w3-hover-text-light-grey"
          onClick="w3_open()"
        >
          <i className="fa fa-bars"></i>  Menu
        </button>
        <span className="w3-bar-item w3-right">Logo</span>
      </div>
      <div
        className="w3-overlay w3-hide-large w3-animate-opacity"
        onClick="w3_close()"
        style={{ cursor: "pointer" }}
        title="close side menu"
        id="myOverlay"
      ></div>
      {/* <!-- !PAGE CONTENT! --> */}
      <div
        className="w3-main"
        style={{ marginLeft: "300px", marginTop: "43px" }}
      >
        {/* <!-- Header --> */}
        <header className="w3-container" style={{ paddingTop: "22px" }}>
          <h5>
            <b>
              <i className="fa fa-dashboard"></i> My Dashboard
            </b>
          </h5>
        </header>
        <div className="w3-row-padding w3-margin-bottom">
          <Link to="#">
            <div className="w3-quarter">
              <div className="w3-container w3-red w3-padding-16">
                <div className="w3-left">
                  <i className="fa fa-comment w3-xxxlarge"></i>
                </div>
                <div className="w3-right">
                  <h3>52</h3>
                </div>
                <div className="w3-clear"></div>
                <h4>Messages</h4>
              </div>
            </div>
          </Link>
          <Link to="#">
            <div className="w3-quarter">
              <div className="w3-container w3-blue w3-padding-16">
                <div className="w3-left">
                  <i className="fa fa-eye w3-xxxlarge"></i>
                </div>
                <div className="w3-right">
                  <h3>99</h3>
                </div>
                <div className="w3-clear"></div>
                <h4>Views</h4>
              </div>
            </div>
          </Link>
          <Link to="#">
            <div className="w3-quarter">
              <div className="w3-container w3-teal w3-padding-16">
                <div className="w3-left">
                  <i className="fa fa-share-alt w3-xxxlarge"></i>
                </div>
                <div className="w3-right">
                  <h3>23</h3>
                </div>
                <div className="w3-clear"></div>
                <h4>Shares</h4>
              </div>
            </div>
          </Link>
          <Link to="admin/student">
            <div className="w3-quarter">
              <div className="w3-container w3-orange w3-text-white w3-padding-16">
                <div className="w3-left">
                  <i className="fa fa-users w3-xxxlarge"></i>
                </div>
                <div className="w3-right">
                  <h3>50</h3>
                </div>
                <div className="w3-clear"></div>
                <h4>Users</h4>
              </div>
            </div>
          </Link>
        </div>

        <div className="w3-panel">
          <div className="w3-row-padding" style={{ margin: 0 - "16px" }}>
            <div className="w3-third">
              <h5>Regions</h5>
              <img
                src="/w3images/region.jpg"
                style={{ width: "100%" }}
                alt="Google Regional Map"
              />
            </div>
            <div className="w3-twothird">
              <h5>Feeds</h5>
              <table className="w3-table w3-striped w3-white">
                <tr>
                  <td>
                    <i className="fa fa-user w3-text-blue w3-large"></i>
                  </td>
                  <td>New record, over 90 views.</td>
                  <td>
                    <i>10 mins</i>
                  </td>
                </tr>
                <tr>
                  <td>
                    <i className="fa fa-bell w3-text-red w3-large"></i>
                  </td>
                  <td>Database error.</td>
                  <td>
                    <i>15 mins</i>
                  </td>
                </tr>
                <tr>
                  <td>
                    <i className="fa fa-users w3-text-yellow w3-large"></i>
                  </td>
                  <td>New record, over 40 users.</td>
                  <td>
                    <i>17 mins</i>
                  </td>
                </tr>
                <tr>
                  <td>
                    <i className="fa fa-comment w3-text-red w3-large"></i>
                  </td>
                  <td>New comments.</td>
                  <td>
                    <i>25 mins</i>
                  </td>
                </tr>
                <tr>
                  <td>
                    <i className="fa fa-bookmark w3-text-blue w3-large"></i>
                  </td>
                  <td>Check transactions.</td>
                  <td>
                    <i>28 mins</i>
                  </td>
                </tr>
                <tr>
                  <td>
                    <i className="fa fa-laptop w3-text-red w3-large"></i>
                  </td>
                  <td>CPU overload.</td>
                  <td>
                    <i>35 mins</i>
                  </td>
                </tr>
                <tr>
                  <td>
                    <i className="fa fa-share-alt w3-text-green w3-large"></i>
                  </td>
                  <td>New shares.</td>
                  <td>
                    <i>39 mins</i>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
        <hr />
        <div className="w3-container">
          <h5>Recent Users</h5>
          <ul className="w3-ul w3-card-4 w3-white">
            <li className="w3-padding-16">
              <img
                src="/w3images/avatar2.png"
                className="w3-left w3-circle w3-margin-right"
                style={{ width: "35px" }}
                alt="avatar"
              />
              <span className="w3-xlarge">Mike</span>
              <br />
            </li>
            <li className="w3-padding-16">
              <img
                src="/w3images/avatar5.png"
                className="w3-left w3-circle w3-margin-right"
                style={{ width: "35px" }}
                alt="avatar"
              />
              <span className="w3-xlarge">Jill</span>
              <br />
            </li>
            <li className="w3-padding-16">
              <img
                src="/w3images/avatar6.png"
                className="w3-left w3-circle w3-margin-right"
                style={{ width: "35px" }}
                alt="avatar"
              />
              <span className="w3-xlarge">Jane</span>
              <br />
            </li>
          </ul>
        </div>
        <hr />
        <div className="w3-container w3-dark-grey w3-padding-32">
          <div className="w3-row">
            <div className="w3-container w3-third">
              <h5 className="w3-bottombar w3-border-green">Demographic</h5>
              <p>Language</p>
              <p>Country</p>
              <p>City</p>
            </div>
            <div className="w3-container w3-third">
              <h5 className="w3-bottombar w3-border-red">System</h5>
              <p>Browser</p>
              <p>OS</p>
              <p>More</p>
            </div>
            <div className="w3-container w3-third">
              <h5 className="w3-bottombar w3-border-orange">Target</h5>
              <p>Users</p>
              <p>Active</p>
              <p>Geo</p>
              <p>Interests</p>
            </div>
          </div>
        </div>
        {/* <!-- Footer --> */}
        <footer className="w3-container w3-padding-16 w3-light-grey">
          <h4>FOOTER</h4>
          <p>
            Powered by{" "}
            <Link
              to="https://www.w3schools.com/w3css/default.asp"
              target="_blank"
            >
              w3.css
            </Link>
          </p>
        </footer>
        {/* <!-- End page content --> */}
      </div>
      {" "}
    </div>
  );
};

export default AdminComponent;
