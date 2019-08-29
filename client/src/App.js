import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import { SayHi } from './store/actions/greeting/index'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
          <button onClick={() => console.log(this.props)}>
            Click me
        </button>
        </header>
      </div>
    );
  }
}


const mapStateToProps = (state) => (
  console.log(state)
)

const mapDispatchToProps = {

}

export default connect(mapStateToProps, null)(App)

