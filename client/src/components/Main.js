import React from "react";
import { connect } from "react-redux";
import { fetchItineraries } from "../store/actions/itineraryActions.js";
import ItineraryCard from "./ItineraryCard";
import { Link } from "react-router-dom";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItinerary: "",
    };
  }

  componentDidMount() {
    this.props.fetchItineraries(this.props.match.params.city_id);
  }

  changeSelectedItinerary = (itinId) => {
    this.setState({ selectedItinerary: itinId });
  };

  render() {
    const { itineraries } = this.props.itineraries;
    console.log(itineraries);
    // console.log(this.props);
    if (itineraries.length === 0) {
      return (
        <div>
          <p>No Itineraries found in this city</p>
          <div>
            <Link to="/cities">Choose another city</Link>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div className="cities-card">
            {" "}
            <h3>{itineraries[0].city_name}</h3>
          </div>
          <p>Available MYtineraries:</p>
          {itineraries.map((itinerary) => (
            <ItineraryCard
              key={itinerary._id}
              itinerary={itinerary}
              selectedItinerary={this.state.selectedItinerary}
              changeSelectedItinerary={this.changeSelectedItinerary}
            />
          ))}
          <div>
            <Link to="/cities">Choose another city</Link>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    itineraries: state.itineraries,
  };
};

export default connect(mapStateToProps, { fetchItineraries })(Main);
