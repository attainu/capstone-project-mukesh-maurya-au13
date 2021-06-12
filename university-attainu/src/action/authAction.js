import { userTypes } from "./actionType/ActionType";

const usersURL = "http://localhost:5000/users";

export const AllUsers = () => {
  // const UsersData = fetch(usersURL, { method: "GET" }).then((res) =>
  //   res.json()
  // );
  return {
    type: userTypes.getAllUsers,
    // payload: UsersData,
  };
};
