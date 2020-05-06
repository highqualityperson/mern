const initState = {
  activities: []
};

const activitiesReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_ACTIVITIES":
      return {
        ...state,
        activities: action.payload
      };

    default:
      return {
        ...state
      };
  }
};

export default activitiesReducer;
