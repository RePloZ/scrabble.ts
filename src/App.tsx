import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './Home'

class App extends Component {
  render () {
    return (
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/game"/>
      </Router>
    )
  }
}

export default App;
