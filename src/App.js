import React, { Component } from 'react';
import './App.css';
import Challenge from './containers/Challenge/Challenge';
import Layout from './components/Layout/Layout';
import {BrowserRouter as Router } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Layout>
            <Challenge />
          </Layout>
        </div>
      </Router>
    );
  }
}

export default App;
