import "./style/TopBar.css";
import { Link } from "react-router-dom";
import MenuOpenIcon from "@material-ui/icons/MenuOpen";

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
            <div class="collapse navbar-collapse mx-3 menu">
              <select name="batch" id="batch">
                <option value="CV Raman">CV Raman</option>
              </select>
            </div>
            <div class="profile collapse navbar-collapse">
              <div class="circular--portrait">
                <img
                  src="https://au-documents.s3.amazonaws.com/profile/mukesh-maurya.png"
                  alt="profileImg"
                />
              </div>
              <div class="text text-primary">User Name</div>
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
