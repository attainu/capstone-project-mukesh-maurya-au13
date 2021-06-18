import LoginPage from "../pages/Login";
import Signup from "../pages/Signup";
import ForgetPass from "../pages/ForgetPass";

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
import { PATH } from "../config/webPath";

import Admin from "../Admin/Admin";
// import Users from "../Admin/Users";
import Student from "../Admin/Student";
import Page404 from "../pages/Page404";
import StudentProfile from "../pages/StudentProfile";


const Routes = [
  { exact: true, path: "/", component: LoginPage },
  { exact: true, path: "/signup", component: Signup },
  { exact: true, path: "/forget-pass", component: ForgetPass },
  { exact: true, path: "/admin", component: Admin },
  { exact: true, path: "/admin/student", component: Student },

  { exact: true, path: PATH.DASHBOARD, component: Dashboard },
  { exact: true, path: PATH.ANNOUNCEMENT, component: Announcement },
  { exact: true, path: PATH.ATTENDANCE, component: Attendance },
  { exact: true, path: PATH.ASSIGNMENT, component: Assignment },
  { exact: true, path: PATH.TEST, component: Test },
  { exact: true, path: PATH.LIBRARY, component: Library },
  { exact: true, path: PATH.PENDING_QUES, component: PendingQues },
  { exact: true, path: PATH.RESOLVE_QUES, component: ResolvedQues },
  { exact: true, path: PATH.SESSION, component: Session },
  { exact: true, path: PATH.PROFILE, component: StudentProfile },
  {
    exact: true,
    path: PATH.RECENT_PLACEMENTS,
    component: RecentPlacements,
  },
  { exact: true, path: "/*", component: Page404 },
];

export default Routes;
