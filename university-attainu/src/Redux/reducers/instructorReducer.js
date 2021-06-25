import { instructorActType } from "../actionType/instructorActType";

// const initialState = {
//   createSessionLink: "",
//   loading: true,
// };
const createSessionReducer = (state = {}, action) => {
  switch (action.type) {
    case instructorActType.CREATE_SESSION_REQUEST:
      return {
        loading: true,
      };
    case instructorActType.CREATE_SESSION_SUCCESS:
      return {
        loading: false,
        createSessionLink: action.payload,
      };
    case instructorActType.CREATE_SESSION_FAILURE:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default createSessionReducer;