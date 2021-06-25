import axios from "axios";
const recentPlacementURL = "http://localhost:5000/api/v1/users/getPlacements";

const recentPlacement = (recentPlacedStudents) => {
  return ({
    type: "RECENT_PLACEMENT",
    payload: recentPlacedStudents,
  });
};

export const fetchRecentPlacement = () =>{
  return (dispatch) =>{
    axios.get(recentPlacementURL)
      .then(res=>{
        const recentPlacedStudents = res.data;
        console.log("action=>",recentPlacedStudents)
        dispatch(recentPlacement(recentPlacedStudents))
      })
      .catch(error=>{
        const errorMsg = error.message;
        console.log(errorMsg)
      })
  }
}