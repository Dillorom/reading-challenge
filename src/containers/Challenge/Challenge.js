import React, { Component } from 'react';

import Books from './Books/Books';
// import FullBook from '../../components/FullBook/FullBook';
import NewBook from './NewBook/NewBook';
import ChallengeTracker from '../../components/ChallengeTracker/ChallengeTracker'
import { Route, Link } from 'react-router-dom';

import './Challenge.css';

class Challenge extends Component {
  
    render () {
        return (
            <div className="Challenge">
                <header>
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to={{
                                pathname: '/new-book',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Book</Link></li>
                            <li><Link to="/books">My Books</Link></li>
                        </ul>
                    </nav>
                </header>
                <Route path="/" exact component={ChallengeTracker} />
                <Route path="/new-book" component={NewBook} />
                <Route path="/books" component={Books} />
            </div>
        );
    }
}

export default Challenge;