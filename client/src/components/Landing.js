import React from "react";
import cat from "./cat.png";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import { Link } from "react-router-dom";

class Landing extends React.Component {
  render() {
    return (
      <div>
        <img className="logo" src={cat} alt="Logo" />
        <p>A page from cats to non-cats. Might the litter be with you.</p>
        <h2>Start browsing</h2>
        <Link to="/cities">
          <img className="link-img" src={ArrowRightIcon} alt="browsing Icon" />
        </Link>
      </div>
    );
  }
}

export default Landing;
