import { combineReducers } from "redux";
// import authReducers from "./authReducers";
import userReducer, { getAdminAnnouncement, postAdminAnnouncement, userDetailsReducer, userLoginReducer } from "./userReducer";

const CombineReducers = combineReducers({
  userRegisterList: userReducer,
  userLogin: userLoginReducer,
  userDetails: userDetailsReducer,
  postAnnouncement: postAdminAnnouncement,
  getAnnouncement: getAdminAnnouncement,
});
export default CombineReducers;
