const goal = (state = {goal: 0}, action) => {
  switch (action.type) {
    case "SET_GOAL":
    console.log('Current state.goal is: ', state.goal);
    console.log(action.goal)
        return Object.assign({}, state, {
        goal: state.goal + action.goal 
        })

    default:
      return state;
  }
};
export default goal;