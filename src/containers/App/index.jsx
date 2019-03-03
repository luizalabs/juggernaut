import React, { Component } from 'react';

import './App.css';
import logo from '../../assets/images/logo.png';
import Welcome from '../../components/Welcome'

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { exampleAction } from '../../store/actions/exampleAction';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Welcome/>
          <p>
            { this.props.content.subtitle }
          </p>
          <button
            className="App-button"
            onClick={ () => this.props.exampleAction() }
          >
            CLICK ME
          </button>
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

const mapStateToProps = state => ({ content: state.content })
const mapDispatchToProps = dispatch => bindActionCreators({ exampleAction }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App)
