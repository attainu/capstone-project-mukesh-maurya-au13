import { userTypes, announceTypes } from "../actionType/userActionType";
// import axios from "axios";

// const usersURL = "http://localhost:5000/users";
export const register =
  (name, mobile, email, password, passwordConfirm) => async (dispatch) => {
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
          mobile,
          email,
          password,
          passwordConfirm,
        }),
      };
      const res = await fetch("/api/v1/users/signup", options);
      const data = await res.json();
      if (res.status === 400 || !data) {
        dispatch({
          type: userTypes.FETCH_USER_FAILURE,
          payload: data.error._message,
        });
      } else {
        dispatch({
          type: userTypes.FETCH_USER_SUCCESS,
          payload: data,
        });

        dispatch({
          type: userTypes.FETCH_LOGIN_SUCCESS,
          payload: data,
        });
        localStorage.setItem("userInfo", JSON.stringify(data));
      }
    } catch (error) {
      dispatch({
        type: userTypes.FETCH_USER_FAILURE,
        payload: error,
      });
    }
  };

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: userTypes.FETCH_LOGIN_REQUEST,
    });

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    };
    const res = await fetch("/api/v1/users/login", options);
    const data = await res.json();
    if (res.status === 401 || !data) {
      dispatch({
        type: userTypes.FETCH_LOGIN_FAILURE,
        payload: data,
      });
    } else {
      dispatch({
        type: userTypes.FETCH_LOGIN_SUCCESS,
        payload: data,
      });
      localStorage.setItem("userInfo", JSON.stringify(data));
    }
  } catch (error) {
    dispatch({
      type: userTypes.FETCH_LOGIN_FAILURE,
      payload: error,
    });
  }
};
export const userProfile = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: userTypes.FETCH_LOGIN_REQUEST,
    });
    const {
      userLogin: { userInfo },
    } = getState();
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const res = await fetch("/api/v1/users/getUserProfile", options);
    const data = await res.json();
    if (res.status === 404 || !data) {
      dispatch({
        type: userTypes.FETCH_LOGIN_FAILURE,
        payload: data,
      });
    } else {
      dispatch({
        type: userTypes.FETCH_LOGIN_SUCCESS,
        payload: data,
      });
      localStorage.setItem("user", JSON.stringify(data));
    }
  } catch (error) {
    dispatch({
      type: userTypes.FETCH_LOGIN_FAILURE,
      payload: error,
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

export const postAnnounce =
  (name, designation, announcement) => async (dispatch, getState) => {
    try {
      dispatch({
        type: announceTypes.POST_ANNOUNCEMENT_REQUEST,
      });
      const { userLogin: { userInfo}} = getState();
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
        body: JSON.stringify({
          name,
          designation,
          announcement,
        }),
      };
      const res = await fetch("/api/v1/admin/announcementPage", options);
      const data = await res.json();
      dispatch({
        type: announceTypes.POST_ANNOUNCEMENT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: announceTypes.POST_ANNOUNCEMENT_FAILURE,
        payload: error,
      });
    }
  };

  //GET ALL ANNOUNCEMENT
  export const getAnnounce = () => async (dispatch, getState) => {
      try {
        dispatch({
          type: announceTypes.GET_ANNOUNCEMENT_REQUEST,
        });
        const {
          userLogin: { userInfo },
        } = getState();

        const options = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userInfo.token}`,
          },
         
        };
        const res = await fetch("/api/v1/users/announcementPage", options);
        const data = await res.json();
        
        dispatch({
          type: announceTypes.GET_ANNOUNCEMENT_SUCCESS,
          payload: data,
        });
      } catch (error) {
        dispatch({
          type: announceTypes.GET_ANNOUNCEMENT_FAILURE,
          payload: error,
        });
      }
    };
