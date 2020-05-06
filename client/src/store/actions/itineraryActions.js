export const fetchItineraries = (city_name) => (dispatch) => {
  fetch("/itineraries/" + city_name)
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
