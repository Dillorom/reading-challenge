import React, { Component } from 'react';

class SetGoal extends Component {
    state = {
        goal: '',
    }

    handleSubmit = () => {
        this.setState({
            goal: this.state.goal
        })
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="goal"><strong>Number of books you want to read: </strong></label>
                    <input type="text" name="goal" placeholder="Number" value={this.state.goal} onChange={(event) => this.setState({goal: event.target.value})}/>
                    <button type="submit">Set Goal</button>
                </form>
            </div>
        )
    }
}
export default SetGoal;