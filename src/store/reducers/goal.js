const setGoal = (state = {goal: 0}, action) => {

  switch (action.type) {
    case "SET_GOAL":
        return Object.assign({}, state, {
        goal: parseInt(action.goal )
        })
    default:
      return state;
  }
};
export default setGoal;