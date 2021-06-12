export const authTypes = {
  login: "userLogin",
  logout: "userLogout",
  forget: "forgetPassword",
  signup: "userSignup"
}

export const profileTypes = {
  getUserInfo: 'getProfileInfo',
};

export const userTypes = {
  getAllUsers: "getAllUsers", //currently accessing this string as action type
  getAdminUsers: "getAdminUsers",
  getInstructor: "getInstructor",
  getMentors: "getMentors"
}
