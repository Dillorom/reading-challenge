import React from 'react';
//import { PropTypes } from 'react';


// const bookCount = ({total=85, goal=100}) => {
    
//     const percentToDecimal = (decimal) => {
//         return ((decimal * 100) +  '%')
//     }
    
//     const calcGoalProgress = (total, goal) => {
//         return percentToDecimal(total/goal)
//     }
//     return(
//     <div className="book-count">
//          <div className="toatl-days"><h1>You are  
//             <span>  
//                 {calcGoalProgress(
//                     total, 
//                     goal
//                 )}
//             </span> done with your challenge.</h1>
// 		</div>
//         <div className="">
//             <h1>Your goal is to read {goal} books this year.</h1>
//         </div>
//         <h1>You have read {total} books so far.</h1>
        
//     </div>
//     )
// }

// // bookCount.propTypes = {
// //     total: PropTypes.number,
// //     goal: PropTypes.number
// // }
// export default bookCount;


const BookCount = (props) => {

    const percentToDecimal = (decimal) => {
        return ((decimal * 100) +  '%')
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
export default BookCount;