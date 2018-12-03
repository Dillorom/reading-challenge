import React, { Component } from 'react';
import './ChallengeTracker.css';
import BookList from './BookList/BookList';
import BookCount from './BookCount/BookCount';
import SetGoal from './SetGoal';
import { connect } from 'react-redux';

class ChallengeTracker extends Component {
    state = {
        total: 0
    }
    handleSubmit = () => {
        this.props.set_goal();
      }
          
    handleChange = (event) => {
        // this.setState({goal: e.target.value})
        this.props.set_goal();
    }
    
    render(){
        return(
            <div className="ChallengeTracker">
            <SetGoal goal={this.props.goal} submit={this.handleSubmit} change={this.handleChange}/>
           {/* // <BookCount total={this.total} goal={this.props.goal}/> */}
            <BookCount total={this.total} goal={Object.values(this.props.goal)}/>
         </div>
        )
    }
};

const mapStateToProps = state => {
    return {
        goal: state.goal,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        set_goal: () => dispatch({ type: 'SET_GOAL'})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChallengeTracker);
