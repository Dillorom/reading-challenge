import React from 'react';
//import PropTypes from 'prop-types';

const BookCount = (props) => {

    const percentToDecimal = (decimal) => {
        return (Math.round((decimal * 100)) +  '%')
    }
    
    const calcGoalProgress = (total, goal) => {
        return percentToDecimal(total/goal)
    }
    return(
        <div className="book-count">
            <div className="total-books">
                <h1>You have read <span>{props.total}</span> books so far.</h1>
            </div>
            <div className="goal">
                <h1>Your goal is to read <span>{props.goal}</span> books this year.</h1>
            </div>
            <div className="progress">
                <h1> You have made <span>{calcGoalProgress(
                    props.total, 
                    props.goal
                )}</span> progress.</h1>
            </div>
        </div>
    )
}
// BookCount.propTypes = {
//     goal: PropTypes.number
// }
export default BookCount;