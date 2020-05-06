import React from "react";
import Home from "./components/Home";
import Footer from "./components/Footer";
import UserMenu from "./components/UserMenuComponent";
import SideBar from "./components/SideBar";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cities from "./components/CitiesPage";
import SignUp from "./components/SignUpPage";
import LogIn from "./components/LogInPage";
import CityCard from "./components/CityCard";
import Favourites from "./components/FavouritesPage";
import { loadUser } from "./store/actions/authActions";
import { connect } from "react-redux";

class App extends React.Component {
  componentDidMount() {
    console.log(this.props);
    this.props.loadUser();
  }

  render() {
    return (
      <div className="App">
        <Router>
          <div className="NavBar">
            <SideBar />
            <UserMenu user={this.props.user} />
          </div>
          <Switch>
            <Route exact path="/">
              <Home className="flex-fill" />
            </Route>
            <Route path="/cities" component={Cities} />
            <Route path="/itineraries/:name" component={CityCard} />
            <Route path="/login" component={LogIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/itineraries/favourites" component={Favourites} />
          </Switch>
          <Footer className="footer" />
        </Router>
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
