import React, { Component } from 'react';
import './App.css';
import Challenge from './containers/Challenge/Challenge';
import Layout from './components/Layout/Layout';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Challenge />
        </Layout>
      </div>
    );
  }
}

export default App;
