import React from "react";
import cat from "./cat.png";
import HomeWorkRoundedIcon from "@material-ui/icons/HomeWorkRounded";
import { Link } from "react-router-dom";

class Landing extends React.Component {
  render() {
    return (
      <div>
        <img className="logo" src={cat} alt="Logo" />
        <p>A page from cats to non-cats. Might the litter be with you.</p>
        <h2>THIS IS A WEBPAGE</h2>
        <Link to="/cities">
          <HomeWorkRoundedIcon style={{ fill: "black" }}>
            c i t i e s
          </HomeWorkRoundedIcon>
        </Link>
      </div>
    );
  }
}

export default Landing;
