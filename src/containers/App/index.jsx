import React, { Component } from 'react';
import logo from '../../assets/images/logo.png';
import './App.css';

import Welcome from '../../components/Welcome'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Welcome/>
          <p>
            to Magalu's boilerplate React App.
          </p>
          <a
            className="App-link"
            href="https://github.com/SoftboxLab/juggernaut"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read the docs
          </a>
        </header>
      </div>
    );
  }
}

export default App;
