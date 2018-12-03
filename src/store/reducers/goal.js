const goal = (state = {goal: 0}, action) => {
  switch (action.type) {
    case "SET_GOAL":
    console.log('Current state.goal is: ', state.goal);
          console.log('Updating state.goal to: ', state.goal + 1) //what is value
        return Object.assign({}, state, {
        goal: state.goal.concat(state.goal + 1) //what is value
        })

    default:
      return state;
  }
};
export default goal;