import React from "react";
// import randomUser from "../assets/random-user.png";
import ActivitiesComp from "./ActivitiesComponent";
// Material UI imports
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FaceIcon from "@material-ui/icons/Face";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

// Style for toggle card

const useStyles = makeStyles((theme) => ({
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));

function ItineraryCard(props) {
  const classes = useStyles();

  const handleExpandClick = (itinId) => {
    if (itinId === props.selectedItinerary) {
      props.changeSelectedItinerary("");
    } else {
      props.changeSelectedItinerary(itinId);
    }
  };

  return (
    <Card className="itinerary-card-container">
      <div className="itinerary-card">
        <div className="profileInfo">
          <div className="profilePic">
            <FaceIcon></FaceIcon>
          </div>
          <div>{props.itinerary.user_name}</div>
        </div>
        <div className="itinieraryInfo">
          <h4 className="h4">{props.itinerary.name}</h4>
          <div className="moreInfo">
            <span>Likes: {props.itinerary.likes}</span>
            <span>{props.itinerary.time} hours</span>
            <span>{props.itinerary.price}</span>
          </div>
          <div>
            {props.itinerary.hashtags.map((hashtag, i) => (
              <span key={i}>#{hashtag} </span>
            ))}
          </div>
        </div>
      </div>
      <div className="toggleDrop">
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]:
                props.selectedItinerary === props.itinerary._id,
            })}
            onClick={() => handleExpandClick(props.itinerary._id)}
            aria-expanded={props.selectedItinerary === props.itinerary._id}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse
          in={props.selectedItinerary === props.itinerary._id}
          timeout="auto"
          unmountOnExit
        >
          <CardContent>
            <ActivitiesComp itinId={props.itinerary._id}></ActivitiesComp>
          </CardContent>
        </Collapse>
      </div>
    </Card>
  );
}

export default ItineraryCard;
