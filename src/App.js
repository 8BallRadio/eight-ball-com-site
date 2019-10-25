import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Header from './Header';
import Home from './Home';
import About from './About';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/donate">
              <Donate />
            </Route>
            <Route path="/calendar">
              <Calendar />
            </Route>
            <Route path="/volunteer">
              <Volunteer />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

function Donate() {
  return (
    <div>
      <h2>Donate</h2>
    </div>
  );
}

function Calendar() {
  return (
    <div>
      <h2> Calendar </h2>
    </div>
  )
}

function Volunteer() {
  return (
    <div>
      <h2> Volunteer </h2>
    </div>
  );
}

export default App;
