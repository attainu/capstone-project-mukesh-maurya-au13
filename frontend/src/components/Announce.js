import React from "react";

const Announce = () => {
  return (
    <div className="w3-container announce">
      <div className="w3-row">
        <div className="w3-col m2 text-center">
          <img
            className="w3-circle"
            src="https://i.pinimg.com/236x/bc/1d/f2/bc1df2e06ecd79f29ea45c86fbf95397.jpg"
            style={{ width: "96px", height: "96px" }}
          />
        </div>
        <div className="w3-col m10 w3-container">
          <h4>
            John{" "}
            <span className="w3-opacity w3-medium">Sep 29, 2014, 9:12 PM</span>
          </h4>
          <p>
            Keep up the GREAT work! I am cheering for you!! Lorem ipsum dolor
            sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
          <br />
        </div>
      </div>
      <hr />
    </div>

    // <div className="announce-section">
    //   <div className="announce">
    //     <div className="card">
    //       <div className="card-header">User Name</div>
    //       <div className="card-body">
    //         @channel Please find the below mentioned Github link of individual
    //         group: Team Member 1 - Mukesh Maurya Team Member 2 - Ayush Singh
    //         Github Link:
    //         https://github.com/attainu/capstone-project-mukesh-maurya-au13 Team
    //         Member 1 - Pratik Kumar Sahu Team Member 2 - Akshay Sahu Github
    //         Link: https://github.com/attainu/capstone-project-pratik-sahu-au13
    //         Team Member 1 - Rajesh Prasad Team Member 2 - Abhik Dey Github Link:
    //         https://github.com/attainu/capstone-project-rajesh-prasad-au13
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Announce;
