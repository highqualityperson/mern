import React from "react";
import cat from "./cat.png";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import { Link } from "react-router-dom";

class Landing extends React.Component {
  render() {
    return (
      <div>
        <img className="logo" src={cat} alt="Logo" width="25%" />
        <p>A page from cats to non-cats. Might the litter be with you.</p>
        <h2>THIS IS A WEBPAGE</h2>
        <Link to="/cities">
          <ArrowRightIcon style={{ fill: "black" }}>c i t i e s</ArrowRightIcon>
        </Link>
      </div>
    );
  }
}

export default Landing;
