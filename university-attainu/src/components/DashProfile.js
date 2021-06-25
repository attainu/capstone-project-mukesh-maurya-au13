import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import { PATH } from "../config/webPath";
import { useHistory } from "react-router-dom";
const DashProfile = () => {
    const history = useHistory();
    const userLogin = useSelector(state => state.userLogin);
    const { userInfo } = userLogin;   

    useEffect(() => {
        if(userInfo && userInfo.user) {
            history.push(PATH.DASHBOARD)
            console.log("hello");
        }else{
          history.push('/')
        }
      },[history, userInfo])
        

  return (
    <div className="container">
      <div className="main-body">
        <div className="row gutters-sm">
          <div className="col-md-4 mb-3">
            <div className="card">
              <div className="card-body">
                <div className="d-flex flex-column align-items-center text-center">
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar7.png"
                    alt="Admin"
                    className="rounded-circle"
                    width="150"
                  />
                  <div className="mt-3">
                    <h4>Welcome, {userInfo?.user.name}</h4>
                    <p className="text-secondary mb-1">Full Stack Developer</p>
                    <p className="text-primary font-size-sm">
                      Git hub : https://github.com/{userInfo?.user.name}-au13
                    </p>
                    <button className="btn btn-primary m-1">
                      Change Avatar
                    </button>
                    <button className="btn btn-outline-primary m-2">
                      Edit Profile
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="card mb-3">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Full Name</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    {userInfo?.user.name}
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Email</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    {userInfo?.user.email}
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Phone</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    {userInfo?.user.mobile}
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Roll No.</h6>
                  </div>
                  <div className="col-sm-9 text-primary"> AUFS013160 </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Training Assistance: </h6>
                  </div>
                  <div className="col-sm-9 text-primary">
                    <span class="label success">BR: Rohit Reddy </span>
                    <span class="label info">CR: Himanshu Sharma</span>
                    <span class="label warning">
                      Community Manager: Jai Shah
                    </span>
                  </div>
                </div>
                <hr />
                <span className="label blue">Instructor: Manish Mahanth</span>
                <span className="label pink">Mentor: Swati Shelke </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashProfile;
