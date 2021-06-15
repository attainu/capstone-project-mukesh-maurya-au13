import { userTypes } from "../actionType/userActionType";
import axios from "axios";

const JSON_url = "https://jsonplaceholder.typicode.com/users";
// const usersURL = "http://localhost:5000/users";

export const fetchUserRequest = () => {
  return {
    type: userTypes.FETCH_USER_REQUEST,
  };
};

export const fetchUserSuccess = (usersList) => {
  return {
    type: userTypes.FETCH_USER_SUCCESS,
    payload: usersList,
  };
};

export const fetchUserFailure = (err) => {
  return {
    type: userTypes.FETCH_USER_FAILURE,
    payload: err,
  };
};

// now implementing Redux-thunk
export const fetchUser = () => {
  return (dispatch) => {
    dispatch(fetchUserRequest);
    axios
      .get(JSON_url)
      .then((response) => {
        const usersList = response.data;
        console.log("====>",usersList)
        dispatch(fetchUserSuccess(usersList));
      })
      .catch((err) => {
        const errorMsg = err.message;
        dispatch(fetchUserFailure(errorMsg));
      });
  };
};
