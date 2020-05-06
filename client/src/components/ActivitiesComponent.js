import React from "react";
import { fetchActivities } from "../store/actions/activityActions";
import { connect } from "react-redux";
import Slider from "react-slick";

class ActivitiesComp extends React.Component {
  componentDidMount() {
    this.props.fetchActivities(this.props.itinId);
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    const { activities } = this.props.activities;
    if (activities.length === 0) {
      return <div>No Activities found</div>;
    } else {
      return (
        <div>
          <p>Activities</p>
          <Slider {...settings}>
            {activities.map(activity => (
              <div key={activity._id}>{activity.name}</div>
            ))}
          </Slider>
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    activities: state.activities
  };
};

export default connect(
  mapStateToProps,
  { fetchActivities }
)(ActivitiesComp);
