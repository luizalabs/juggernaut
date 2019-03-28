import React, { Component } from 'react'

import './App.css'
import logo from 'assets/images/logo.png'
import Welcome from 'components/Welcome'
import PropTypes from 'prop-types'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { exampleActionRequest } from 'store/actions/exampleAction'

class App extends Component {
  static propTypes = {
    subtitle: PropTypes.array,
    exampleActionRequest: PropTypes.func
  }
  render() {
    const { exampleActionRequest, subtitle } = this.props
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Welcome />
          <p>{console.log(subtitle)}</p>
          <button className="App-button" onClick={() => exampleActionRequest()}>
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
    )
  }
}

const mapStateToProps = (state) => ({ subtitle: state.exampleReducer.examples })
const mapDispatchToProps = (dispatch) => bindActionCreators({ exampleActionRequest }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
