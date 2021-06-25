import { instructorActType } from "../actionType/instructorActType";

export const createSessionAction =
  (sessionLink) => async (dispatch, getState) => {
    try {
      dispatch({
        type: instructorActType.CREATE_SESSION_REQUEST,
      });

      const {
        userLogin: { userInfo },
      } = getState();

      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
        body: JSON.stringify({ sessionLink }),
      };

      const result = await fetch("/api/v1/instructor/createSession", options);
      const data = await result.json();
      console.log("result in action", result);
      console.log("session link in action", data);
      dispatch({
        type: instructorActType.CREATE_SESSION_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: instructorActType.CREATE_SESSION_FAILURE,
        payload: error,
      });
    }
  };
