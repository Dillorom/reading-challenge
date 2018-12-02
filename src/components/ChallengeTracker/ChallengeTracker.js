import React, { Component } from 'react';
import './ChallengeTracker.css';
import BookList from './BookList/BookList';
import BookCount from './BookCount/BookCount';
import SetGoal from './SetGoal';

class ChallengeTracker extends Component {
    state = {
        goal: 0,
        total: 0,
    }

    handleSubmit = () => {
        this.setState({
            goal: this.state.goal
        })
    }

    handleChange = (e) => {
        this.setState({goal: e.target.value})
    }
    
    render(){
        return(
            <div className="ChallengeTracker">
            <SetGoal goal={this.state.goal} submit={this.handleSubmit} change={this.handleChange}/>
            <BookCount total={this.state.total} goal={this.state.goal}/>
         </div>
        )
    }
} 

export default ChallengeTracker;
