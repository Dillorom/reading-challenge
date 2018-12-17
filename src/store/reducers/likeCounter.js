const likeCounter = (state = {counter: 0}, action) => {
    switch (action.type){
    case "INCREMENT_LIKE_COUNTER":
        return {
            counter: state.counter + 1
        }
    default:
    return state
    }
}
export default likeCounter;