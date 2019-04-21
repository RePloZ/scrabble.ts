import React, { Component } from 'react';
import logo from './logo.svg';

export default class Home extends Component {
  render () {

    // const sac = new Sac();

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            SCRABBLE.TS - A REACT APP BY
            <br/>
            <br/>
            Hervé Kay - <a 
            href="https://github.com/RePloZ"
            >
            @RePloZ
            </a>
          </p>
        </header>
      </div>
    );
  }
}

