import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import { Link } from "react-router-dom";

class MyFooter extends React.Component {
  render() {
    return (
      <Link to="/">
        <HomeIcon style={{ fill: "black" }} />
      </Link>
    );
  }
}

export default MyFooter;
