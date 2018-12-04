import React, { Component } from 'react';
import './ChallengeTracker.css';
import BookList from './BookList/BookList';
import BookCount from './BookCount/BookCount';
import SetGoal from './SetGoal';
import { connect } from 'react-redux';
import { setGoal } from '../../actions/index';

class ChallengeTracker extends Component {
    state = {
        total: 0
    }
   
    
    render(){
        //debugger
        return(
            <div className="ChallengeTracker">
            <SetGoal goal={this.props.goal} setGoal={this.props.setGoal}/>
            <BookCount goal={this.props.goal} total={this.total}/> 
            {/* goal={Object.values(this.props.goal)} */}
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
