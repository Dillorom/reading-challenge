import React, { Component } from 'react';
//import PropTypes from 'prop-types';

const SetGoal =(props) => (
    <div>
        <form onSubmit={props.submit}>
            <label htmlFor="goal"><strong>Number of books you want to read: </strong></label>
            <input type="text" name="goal" placeholder="Number"  onChange={props.change}/>
            <button type="submit">Set Goal</button>
        </form>
    </div>
)
// SetGoal.propTypes = {
//     goal: PropTypes.number.isRequired
// }
export default SetGoal;