import React from "react";
import cat from "../assets/cat.png";
import { register } from "../store/actions/authActions";

class Landing extends React.Component {
  render() {
    return (
      <div>
        <img className="logo" src={cat} alt="Logo" />
        <h2>A dating site for city cats.</h2>
        <div>
          <a href="/cities">
            <h3></h3>
            <h5>Check out these city cats!</h5>
          </a>
        </div>
      </div>
    );
  }
}

export default Landing;
