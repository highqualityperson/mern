import React from "react";
import { connect } from "react-redux";
import { fetchItineraries } from "../store/actions/itineraryActions";
import ItineraryCard from "./itineraryCard";
import { Link } from "react-router-dom";

class MYtinerary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItinerary: "",
    };
  }

  componentDidMount() {
    console.log("chosen city:", this.props.match.params.name);
    this.props.fetchItineraries(this.props.match.params.name);
    console.log(this.props);
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
          <h3>No Itineraries found in this city</h3>
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
          <p>Ma Cats:</p>
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

export default connect(mapStateToProps, { fetchItineraries })(MYtinerary);
