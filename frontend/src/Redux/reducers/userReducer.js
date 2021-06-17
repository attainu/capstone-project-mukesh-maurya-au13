import { userTypes, announceTypes } from "../actionType/userActionType";

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  loading: false,
  usersList: { userInfo: userInfoFromStorage },
  announcementList: [] ,
  error: "",
};

const userReducer = (state, action) => {
  state = state || initialState;
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
        usersList: action.payload,
      };
    case userTypes.FETCH_FORGOT_PASSWORD_FAILURE:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

//LOGIN
export const userLoginReducer = (state={}, action) => {
  
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

export const postAdminAnnouncement = (state, action) => {
 state = state || initialState;
  switch (action.type) {
    case announceTypes.POST_ANNOUNCEMENT_REQUEST:
      return {
        loading: true,
      };
    case announceTypes.POST_ANNOUNCEMENT_SUCCESS:
      return {
        loading: false,
        announcementList: action.payload,
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

export const getAdminAnnouncement = (state= { announcements: [] }, action) => {
  
  switch (action.type) {
    case announceTypes.GET_ANNOUNCEMENT_REQUEST:
      return {
      
        loading: true,
        announcements: []
      };
    case announceTypes.GET_ANNOUNCEMENT_SUCCESS:
      return {
       
        loading: false,
        announcements: action.payload,
      };
    case announceTypes.GET_ANNOUNCEMENT_FAILURE:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
