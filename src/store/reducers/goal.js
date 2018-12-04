const setGoal = (state = {goal: 0}, action) => {

  switch (action.type) {
    case "SET_GOAL":
    console.log('Current state.goal is: ', state.goal);
    console.log(action.goal)
        return Object.assign({}, state, {
        goal: parseInt(action.goal )
        })
    default:
    console.log("initial state is ", state.goal)
      return state;
  }
};
export default setGoal;