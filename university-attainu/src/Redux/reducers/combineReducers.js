import { combineReducers } from "redux";
// import authReducers from "./authReducers";
import userReducer from "./userReducer";

const CombineReducers = combineReducers({
  usersList: userReducer,
});
export default CombineReducers;
