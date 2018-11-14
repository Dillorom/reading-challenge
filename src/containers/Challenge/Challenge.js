import React, { Component } from 'react';

import Books from '../../components/Books/Books';
import FullBook from '../../components/FullBook/FullBook';
import NewBook from '../../components/NewBook/NewBook';
import ChallengeTracker from '../../components/ChallengeTracker/ChallengeTracker'

import './Challenge.css';

class Challenge extends Component {
    state = {
        allBooks: [
            {
                title: "Design your life",
                author: "Bill Burnett"
            },
            {
                title: "The last lecture",
                author: "Randy Pausch"
            },
            { 
                title: "The arabian nights",
                author: "Unknown"
            }
        ]
    }
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
                    <Books allBooks={this.state.allBooks}/>
                </section>
                <section>
                    <FullBook />
                </section>
                
            </div>
        );
    }
}

export default Challenge;