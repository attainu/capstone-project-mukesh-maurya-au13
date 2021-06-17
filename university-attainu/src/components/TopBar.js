import "./style/TopBar.css";
import MenuOpenIcon from "@material-ui/icons/MenuOpen";
import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <div id="topbar">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button
            type="button"
            id="sidebarCollapse"
            className="btn btn-warning"
          >
            <i className="fas fa-align-left"></i>
            <span>
              <MenuOpenIcon />
            </span>
          </button>
          <button
            className="btn btn-dark d-inline-block d-lg-none ml-auto"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-align-justify"></i>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="collapse navbar-collapse mx-3 menu">
              <select name="batch" id="batch">
                <option value="CV Raman">CV Raman</option>
              </select>
            </div>
            <div className="profile collapse navbar-collapse ">
              <div className="circular--portrait">
                <Link to="/dashboard">
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar7.png"
                    alt="profileImg"
                  />
                </Link>
              </div>
              <div
                className="text text-primary dropdown-toggle "
                type="button"
                data-toggle="dropdown"
              >
                User Name
                <span class="caret"></span>
                <ul class="dropdown-menu dropdown-menu-dark">
                  <li>
                    <Link className="dropdown-item" to="#">
                      Profile
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="user/logout  ">
                      Logout
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div id="main-area">
        <div className="display-5">
          {/* Welcome to AttainU University. ***************************************** */}
        </div>
      </div>
    </div>
  );
};

export default TopBar;
