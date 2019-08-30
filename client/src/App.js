import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import { SayHi } from './store/actions/greeting/index'


class App extends Component {
  render() {

    const greeting = () => {
      this.props.SayHi()
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {this.props.title && this.props.title.data}
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
          <button onClick={greeting}>
            Click me
        </button>
        </header>
      </div>
    );
  }
}


const mapStateToProps = (state) => ({
  title: state.title
})

const mapDispatchToProps = {
  SayHi
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

