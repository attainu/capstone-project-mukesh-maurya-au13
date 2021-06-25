import {
  userTypes,
  announceTypes,
  resetPass_Types,
  library_Types,
} from "../actionType/userActionType";

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case userTypes.FETCH_USER_REQUEST:
      return {
        loading: true,
      };
    case userTypes.FETCH_USER_SUCCESS:
      return {
        loading: false,
        userInfo: action.payload,
      };
    case userTypes.FETCH_USER_FAILURE:
      return {
        loading: false,
        error: action.payload,
      };

    case userTypes.FETCH_FORGOT_PASSWORD_REQUEST:
      return {
        loading: true,
      };
    case userTypes.FETCH_FORGOT_PASSWORD_SUCCESS:
      return {
        loading: false,
        userInfo: action.payload,
      };
    case userTypes.FETCH_FORGOT_PASSWORD_FAILURE:
      return {
        loading: false,
        error: action.payload,
      };
    case resetPass_Types.FETCH_RESETPASSWORD_REQUEST:
      return {
        loading: true,
      };
    case resetPass_Types.FETCH_RESETPASSWORD_SUCCESS:
      return {
        loading: false,
        userInfo: action.payload,
      };
    case resetPass_Types.FETCH_RESETPASSWORD_FAILURE:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

//LOGIN
export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case userTypes.FETCH_LOGIN_REQUEST:
      return {
        loading: true,
      };
    case userTypes.FETCH_LOGIN_SUCCESS:
      return {
        loading: false,
        userInfo: action.payload,
      };
    case userTypes.FETCH_LOGIN_FAILURE:
      return {
        loading: false,
        error: action.payload,
      };
    case userTypes.FETCH_LOGOUT:
      return {
        loading: false,
        userInfo: null,
      };
    default:
      return state;
  }
};

//user details
export const userDetailsReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case userTypes.FETCH_USERDETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case userTypes.FETCH_USERDETAILS_SUCCESS:
      return {
        loading: false,
        user: action.payload,
      };
    case userTypes.FETCH_USERDETAILS_FAILURE:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const postAdminAnnouncement = (state = [], action) => {
  switch (action.type) {
    case announceTypes.POST_ANNOUNCEMENT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case announceTypes.POST_ANNOUNCEMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        announcements: action.payload,
      };
    case announceTypes.POST_ANNOUNCEMENT_FAILURE:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const postVideoLibrary = (state = [], action) => {
  switch (action.type) {
    case library_Types.FETCH_POSTLIBRARY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case library_Types.FETCH_POSTLIBRARY_SUCCESS:
      return {
        ...state,
        loading: false,
        videoData : action.payload,
      };
    case library_Types.FETCH_POSTLIBRARY_FAILURE:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
