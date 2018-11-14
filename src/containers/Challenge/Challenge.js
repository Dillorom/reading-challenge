import React, { Component } from 'react';

import Books from './Books/Books';
import FullBook from './FullBook/FullBook';
import NewBook from './NewBook/NewBook';
import ChallengeTracker from '../../components/ChallengeTracker/ChallengeTracker'
import { Route, NavLink, Switch } from 'react-router-dom';

import './Challenge.css';

class Challenge extends Component {
  
    render () {
        return (
            <div className="Challenge">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to="/" exact>Home</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-book',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Book</NavLink></li>
                            <li><NavLink to="/books/">My Books</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    <Route path="/books" component={Books} />
                    <Route path="/new-book" component={NewBook} />
                    <Route path="/" component={ChallengeTracker} />
                    {/* <Route render={() => <h1>Not found</h1>} /> */}
                </Switch>
            </div>
        );
    }
}

export default Challenge;