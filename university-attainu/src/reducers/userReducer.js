import { userTypes } from "../action/actionType/ActionType";

const initialState = {
  users :"mukesh",
  // usersDetails={}
}
const userReducer = (state = initialState, action) => {
  state = state || initialState;
  switch (action.types) {
    case (userTypes.getAllUsers):
      return {
        ...state,
        users: state.users
      };
    default: return initialState
  }
};

export default userReducer;