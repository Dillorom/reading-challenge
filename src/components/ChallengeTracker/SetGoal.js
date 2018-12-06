import React, { Component } from 'react';
//import PropTypes from 'prop-types';

class SetGoal extends Component {
    state = {
        goal: ''
    }
    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
        

    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.setGoal(this.state.goal); 
        this.setState({
            goal: ''
        })


    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="goal"><strong>Number of books you want to read: </strong></label>
                    <input type="text" id="goal" placeholder="Number"  value={this.state.goal} onChange={this.handleChange}/>
                    <button type="submit">Set Goal</button>
                </form>
            </div>
        )
    }
}

export default SetGoal;