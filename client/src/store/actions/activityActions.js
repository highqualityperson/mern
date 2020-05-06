export const fetchActivities = itinerary_id => dispatch => {
  fetch("/activities/" + itinerary_id)
    .then(res => res.json())
    .then(result => {
      dispatch({
        type: "FETCH_ACTIVITIES",
        payload: result
      });
    })
    .catch(error => {
      this.setState({
        isLoaded: true,
        error
      });
    });
};
