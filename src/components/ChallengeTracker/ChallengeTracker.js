import React, { Component } from 'react';
import './ChallengeTracker.css';
import BookList from './BookList/BookList';
import BookCount from './BookCount/BookCount';
import SetGoal from './SetGoal';
import { connect } from 'react-redux';

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
          
    handleChange = (action, value) => {
        // this.setState({goal: e.target.value})
        switch ( action ) {
            case 'SET_GOAL':
                this.setState({ goal: value } )
        }
    }
    
    render(){
        return(
            <div className="ChallengeTracker">
            <SetGoal goal={this.props.goal} submit={this.handleSubmit} change={() => this.handleChange( 'SET_GOAL ')}/>
            <BookCount total={this.props.total} goal={this.props.goal}/>
         </div>
        )
    }
};

const mapStateToProps = state => {
    return {
        goal: state.goal,
        total: state.total
    }
}

export default connect(mapStateToProps)(ChallengeTracker);
