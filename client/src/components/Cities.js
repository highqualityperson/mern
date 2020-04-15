import React from "react";
import { connect } from "react-redux";
import { fetchCities } from "../store/actions/cityActions";
import { Link } from "react-router-dom";

class Cities extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      citySearch: "",
    };
  }

  componentDidMount() {
    console.log(this.props);
    this.props.fetchCities();
    console.log(this.props);
  }

  handleChange = (e) => {
    this.setState({
      citySearch: e.target.value,
    });
  };

  render() {
    const { citySearch } = this.state;
    const { cities } = this.props.cities;
    // console.log(this.props);
    let filteredCities = cities.filter((city) => {
      return (
        city.city.toLowerCase().startsWith(citySearch.toLowerCase()) !== false
      );
    });
    if (filteredCities.length === 0) {
      return <div className="lds-hourglass"></div>;
    } else {
      return (
        <div>
          <h1>Cities Page</h1>
          <div className="filter">
            <label htmlFor="filter">Filter by City: </label>
            <input
              type="text"
              id="filter"
              value={this.state.citySearch}
              onChange={this.handleChange}
            />
          </div>

          {filteredCities.map((city) => (
            <Link
              className="link"
              key={city._id}
              to={"/itineraries/" + city._id}
            >
              <div className="cities-card" key={city._id}>
                <h3>{city.city}</h3>
              </div>
            </Link>
          ))}
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    cities: state.cities,
  };
};

export default connect(mapStateToProps, { fetchCities })(Cities);
