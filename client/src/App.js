import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import cat from "./cat.png";
import "./App.css";
import Landing from "./Landing.js";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Landing} />
          </Switch>
          <Switch>
            <header className="App-header">
              <img src={cat} className="App-logo" alt="logo" width="25%" />
            </header>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
