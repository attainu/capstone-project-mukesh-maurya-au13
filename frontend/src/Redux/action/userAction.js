import { userTypes } from "../actionType/userActionType";
// import axios from "axios";

// const usersURL = "http://localhost:5000/users";
export const register =
  (name, email, mobile, password, passwordConfirm) => async (dispatch) => {
    try {
      dispatch({
        type: userTypes.FETCH_USER_REQUEST,
      });

      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          mobile,
          password,
          passwordConfirm,
        }),
      };

      const res = await fetch("/api/v1/users/signup", options);
      const data = await res.json();

      dispatch({
        type: userTypes.FETCH_USER_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: userTypes.FETCH_USER_FAILURE,
        payload: error.response,
      });
    }
  };

export const forgot_password = (email) => async (dispatch) => {
  try {
    dispatch({
      type: userTypes.FETCH_FORGOT_PASSWORD_REQUEST,
    });

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
      }),
    };

    const res = await fetch("/api/v1/users/forgotPassword", options);
    const data = await res.json();

    dispatch({
      type: userTypes.FETCH_FORGOT_PASSWORD_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: userTypes.FETCH_FORGOT_PASSWORD_FAILURE,
      payload: error.response,
    });
  }
};
