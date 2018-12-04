import React, { Component } from 'react';
import './ChallengeTracker.css';
import BookList from './BookList/BookList';
import BookCount from './BookCount/BookCount';
import SetGoal from './SetGoal';
import { connect } from 'react-redux';
import { setGoal } from '../../actions/index';

class ChallengeTracker extends Component {
    // state = {
    //     goal: 0,
    //     total: 0
    // }
    handleSubmit = () => {
        this.props.setGoal();
        // this.props.dispatch({type: 'SET_GOAL', goal: this.state})
      }
          
    handleChange = (event) => {
        // this.setState({goal: e.target.value})
        this.props.setGoal();
    }
    
    render(){
        //debugger
        return(
            <div className="ChallengeTracker">
            <SetGoal goal={this.props.goal} submit={this.handleSubmit} change={this.handleChange}/>
           {/* // <BookCount total={this.total} goal={this.props.goal}/> */}
            <BookCount goal={Object.values(this.props.goal)}/> 
         </div>
        )
    }
};

const mapStateToProps = state => {
    //debugger
    return {
        goal: state.goal,
    }
}



export default connect(mapStateToProps, { setGoal })(ChallengeTracker);
