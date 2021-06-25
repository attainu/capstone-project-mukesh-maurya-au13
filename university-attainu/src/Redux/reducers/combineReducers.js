import { combineReducers } from "redux";
// import authReducers from "./authReducers";
import userReducer, {
  postAdminAnnouncement,
  postVideoLibrary,
  userDetailsReducer,
  userLoginReducer,
} from "./userReducer";
import createSessionReducer from "./instructorReducer";

const CombineReducers = combineReducers({
  userRegisterList: userReducer,
  userLogin: userLoginReducer,
  userDetails: userDetailsReducer,
  postAnnouncement: postAdminAnnouncement,
  videoLibrary: postVideoLibrary,
  createSession: createSessionReducer,
});

const userLoginFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const postAnnouncementFromStorage = localStorage.getItem("announcements")
  ? JSON.parse(localStorage.getItem("announcements"))
  : [];

export const initialState = {
  userLogin: { userInfo: userLoginFromStorage },
  postAnnouncement: { announcements: postAnnouncementFromStorage },
  videoLibrary: { videoData: [] },
  createSession:{createSessionLink : []}
};

export default CombineReducers;
