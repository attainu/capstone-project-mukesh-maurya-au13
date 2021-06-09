import React from "react";
import DashProfile from "../components/DashProfile";
import "./pageStyle/Dashboard.css";

const Dashboard = () => {
  return (
    <div className="container">
      {/* <h1>This is Dashboard Page.</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum maiores
        eveniet voluptatibus porro optio quas libero natus reiciendis ex maxime,
        velit rerum totam eos incidunt molestiae, atque sequi explicabo a?
      </p> */}
      <DashProfile />
    </div>
  );
};

export default Dashboard;
