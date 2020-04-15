import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { loadUser } from "./store/actions/authActions";
import { connect } from "react-redux";

/* graphical */
// import cat from "./cat.png";
import "./App.css";

/*  load components */
import Landing from "./components/Landing.js";
import Footer from "./components/Footer.js";
import User from "./components/User.js";
import Drawer from "./components/Drawer.js";
import Cities from "./components/Cities.js";
import SignUp from "./components/SignUp.js";
import LogIn from "./components/LogIn.js";
import Main from "./components/Main.js";
import Favorit from "./components/Favorit.js";

class App extends React.Component {
  componentDidMount() {
    console.log(this.props);
    this.props.loadUser();
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div className="NavBar">
            <User user={this.props.user} />
            <Drawer />
          </div>
          <Switch>
            <Route exact path="/">
              <Landing className="flex-fill" />
            </Route>
            <Route path="/cities" component={Cities} />
            <Route path="/itineraries/:city_id" component={Main} />
            <Route path="/login" component={LogIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/itineraries/favourites" component={Favorit} />
          </Switch>
          <Footer className="footer" />
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
  };
};

export default connect(mapStateToProps, { loadUser })(App);
