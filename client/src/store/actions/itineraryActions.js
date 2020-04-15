export const fetchItineraries = (city_id) => (dispatch) => {
  fetch("/itineraries/" + city_id)
    .then((res) => res.json())
    .then((result) => {
      dispatch({
        type: "FETCH_ITINERARIES",
        payload: result,
      });
    })
    .catch((error) => {
      this.setState({
        isLoaded: true,
        error,
      });
    });
};
