import React from 'react';
//import { PropTypes } from 'react';


const bookCount = ({total=85, goal=100}) => {
    
    const percentToDecimal = (decimal) => {
        return ((decimal * 100) +  '%')
    }
    
    const calcGoalProgress = (total, goal) => {
        return percentToDecimal(total/goal)
    }
    return(
    <div>
         <div><h1>You are  
            <span>  
                {calcGoalProgress(
                    total, 
                    goal
                )}
            </span> done with your challenge.</h1>
		</div>
        <h1>Your goal is to read {goal} books this year.</h1>
        <h1>You have read {total} books so far.</h1>
        
    </div>
    )
}

// bookCount.propTypes = {
//     total: PropTypes.number,
//     goal: PropTypes.number
// }
export default bookCount;


