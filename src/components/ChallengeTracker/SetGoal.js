import React, { Component } from 'react';

const SetGoal =(props) => (
    <div>
        <form onSubmit={props.submit}>
            <label htmlFor="goal"><strong>Number of books you want to read: </strong></label>
            <input type="text" name="goal" placeholder="Number"  onChange={props.change}/>
            <button type="submit">Set Goal</button>
        </form>
    </div>
)

export default SetGoal;