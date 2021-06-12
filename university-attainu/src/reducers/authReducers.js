import { authTypes } from "../action/actionType/ActionType";

const initialState = !!localStorage.getItem("isAuth");

export const authReducer = (state, action) => {
  state = state || initialState;
  switch (action.type) {
    case authTypes.login: {
      localStorage.setItem("isAuth", true);
      return true;
    }
    case authTypes.logout: {
      localStorage.removeItem("isAuth");
      localStorage.removeItem("profileInfo");
      return false;
    }
    default:
      return state;
  }
};
