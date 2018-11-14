import React, { Component } from 'react';
import './ChallengeTracker.css';

class ChallengeTracker extends Component {
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
    render(){
        return(
            <div className="ChallengeTracker">
                <h1>This is your Challenge Summary</h1>
                <p>You plan to read {this.state.goal} book this year.</p>
                <p>So far you have read {this.state.books} books.</p>
                <p>You are {this.state.progress}% done.</p>
            </div>
        );
    }
};

export default ChallengeTracker;
