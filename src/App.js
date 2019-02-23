import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';

import Header from './components/header';

import homepg from './pages/home';
import Registerpg from './pages/register';
import Loginpg from './pages/login';

import Dashboardpg from './pages/dashboard';

import Footer from './components/footer';

import './App.scss';

library.add(faUser);
library.add(faLock);

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header title="TopHat Panda" />
          <Switch>
            <Route exact path="/" component={homepg} />
            <Route exact path="/login" component={Loginpg} />
            <Route exact path="/register" component={Registerpg} />

            <Route exact path="/dashboard" component={Dashboardpg} />
            {/* <Route path='*' component={Not_found_pg} /> */}
          </Switch>
          <Footer date={new Date().getFullYear()} />
        </div>
      </Router>
    );
  }
}

export default App;
