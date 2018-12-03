import React, { Component } from 'react';
import './ChallengeTracker.css';
import BookList from './BookList/BookList';
import BookCount from './BookCount/BookCount';
import SetGoal from './SetGoal';
import { connect } from 'react-redux';

class ChallengeTracker extends Component {
    handleSubmit = () => {
        this.setState({
            goal: this.state.goal
        })
      }
          
    handleChange = (event) => {
        // this.setState({goal: e.target.value})
        this.props.set_goal();
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

const mapDispatchToProps = dispatch => {
    return {
        set_goal: () => dispatch({ type: 'SET_GOAL' })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChallengeTracker);
