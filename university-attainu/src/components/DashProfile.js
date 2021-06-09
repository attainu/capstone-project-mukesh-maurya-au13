import React from "react";

const DashProfile = () => {
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
                    <h4>Mukesh Maurya</h4>
                    <p className="text-secondary mb-1">Full Stack Developer</p>
                    <p className="text-primary font-size-sm">
                      Git hub : https://github.com/mukesh-maurya-au13
                    </p>
                    <button className="btn btn-primary">Follow</button>
                    <button className="btn btn-outline-primary">Message</button>
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
                    Mukesh Kumar Maurya
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Email</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    Mukesh.india9@gmail.com
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Phone</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">+91 7011074505</div>
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
                <span class="label blue">Instructor: Manish Mahanth</span>
                <span class="label pink">Mentor: Swati Shelke </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashProfile;
