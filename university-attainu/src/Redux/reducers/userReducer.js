import { userTypes } from "../actionType/userActionType";

const initialState = {
  loading: false,
  usersList: [],
  err: "",
};

const userReducer = (state = initialState, action) => {
  // state = state || initialState;
  switch (action.types) {
    case userTypes.FETCH_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case userTypes.FETCH_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        usersList: action.payload,
        err: "",
      };
    case userTypes.FETCH_USER_FAILURE:
      return {
        ...state,
        loading: false,
        err: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
