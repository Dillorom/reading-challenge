import React, { Component } from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import {BrowserRouter as Router } from 'react-router-dom';
import Books from './containers/Challenge/Books/Books';


class App extends Component {
  render() {
    return (
      <Router basename="/">
        <div className="App">
          <Books />
        </div>
      </Router>
    );
  }
}

export default App;
