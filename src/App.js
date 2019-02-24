import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUser,
  faLock,
  faEnvelope,
  faPhone
} from "@fortawesome/free-solid-svg-icons";

import Header from "./components/header";

import homepg from "./pages/home";
import Registerpg from "./pages/register";
import Loginpg from "./pages/login";

import Dashboardpg from "./pages/dashboard";

import Footer from "./components/footer";

import { Provider } from "react-redux";
import store from "./store";

import "./App.scss";

library.add(faUser);
library.add(faEnvelope);
library.add(faPhone);
library.add(faLock);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header title="TopHat Panda" />
            <Switch>
              <Route exact path="/" component={homepg} />
              <Route exact path="/login" component={Loginpg} />
              <Route exact path="/register" component={Registerpg} />
              <Route path="/dashboard" component={Dashboardpg} />
            </Switch>
            <Footer date={new Date().getFullYear()} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
