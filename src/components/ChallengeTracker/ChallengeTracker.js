import React, { Component } from 'react';
import './ChallengeTracker.css';
import BookCount from './BookCount/BookCount';
import SetGoal from './SetGoal';
import { connect } from 'react-redux';
import { setGoal } from '../../actions/index';

class ChallengeTracker extends Component {
    state = {
        total: 0
    }
   
    render(){
        return(
            <div className="ChallengeTracker">
            <SetGoal goal={this.props.goal} setGoal={this.props.setGoal}/>
            <BookCount goal={this.props.goal} total={this.total}/> 
         </div>
        )
    }
};

const mapStateToProps = state => {
    return {
        goal: state.setGoal.goal
    }
}

export default connect(mapStateToProps, { setGoal })(ChallengeTracker);
