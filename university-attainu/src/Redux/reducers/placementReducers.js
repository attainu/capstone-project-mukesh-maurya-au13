const data = {
  recentPlacedStudents: [],
};

export const recentPlacementReducer = (state = data, action) => {
  switch (action.type) {
    case "RECENT_PLACEMENT":
      return {
        ...state,
        dataList: action.payload,
      };
    default:
      return state;
  }
};
