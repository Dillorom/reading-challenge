import React, { Component } from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import {BrowserRouter as Router } from 'react-router-dom';
import Books from './containers/Books/Books';
import {fetchBooks} from './actions/index';
import {connect } from 'react-redux';
class App extends Component {

  componentDidMount() {
    this.props.fetchBooks()
  }
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

export default connect(null, {fetchBooks})(App);
