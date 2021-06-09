import React from 'react';
import { Route, Switch } from "react-router-dom";

// import LoginPage from "../pages/Login";
// import Signup from "../pages/Signup";
// import ForgetPass from "../pages/ForgetPass";

import Dashboard from "../pages/Dashboard";
import Announcement from "../pages/Announcement";

import Attendance from "../pages/student/Attendance";
import Assignment from "../pages/student/Assignment";
import Test from "../pages/student/Test";
import Library from "../pages/student/Library";

import PendingQues from "../pages/askDoubt/PendingQues";
import ResolvedQues from "../pages/askDoubt/ResolvedQues";

import Session from "../pages/Session";
import RecentPlacements from "../pages/RecentPlacements";

const Routes = () => {
  return (
    <div className="routes">
      <Switch>
        {/* <Route exact path="/" component={LoginPage}/>
        <Route exact path="/signup" component={Signup}/>
        <Route exact path="/forget-pass" component={ForgetPass}/> */}

        <Route exact path="/dashboard" component={Dashboard}/>
        <Route exact path="/announcement" component={Announcement}/>
        <Route exact path="/attendance" component={Attendance}/>
        <Route exact path="/assignment" component={Assignment}/>
        <Route exact path="/test" component={Test}/>
        <Route exact path="/library" component={Library}/>
        <Route exact path="/pending-ques" component={PendingQues}/>
        <Route exact path="/resolve-ques" component={ResolvedQues}/>
        <Route exact path="/session" component={Session}/>
        <Route exact path="/recent-placements" component={RecentPlacements}/>

      </Switch>
    </div>
  )
}

export default Routes;
