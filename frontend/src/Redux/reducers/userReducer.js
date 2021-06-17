import { userTypes } from "../actionType/userActionType";

const initialState = {
  loading: false,
  usersList: [],
  err: "",
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
        ...state,
        loading: false,
        usersList: action.payload,
      };
    case userTypes.FETCH_USER_FAILURE:
      return {
        loading: false,
        err: action.payload,
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
        err: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
