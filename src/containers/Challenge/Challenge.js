import React, { Component } from 'react';
import Book from '../../components/Book/Book';
import FullBook from '../../components/FullBook/FullBook';
import NewBook from '../../components/NewBook/NewBook';
import ChallengeTracker from '../ChallengeTracker/ChallengeTracker'

import './Challenge.css';

class Challenge extends Component {
    render () {
        return (
            <div>
                <section>
                    <ChallengeTracker />
                </section>
                <section>
                    <NewBook />
                </section>
                <section className="Books">
                    <Book />
                    <Book />
                    <Book />
                </section>
                <section>
                    <FullBook />
                </section>
                
            </div>
        );
    }
}

export default Challenge;