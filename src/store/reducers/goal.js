
const initialState = {
    goal: 0
}
const goal = (state = initialState, action) => {
    switch (action.type) {
      case "SET_GOAL":
        return state.concat(action.goal); //maybe state.count + (action.goal)
      // return [...state, exercises: action.exercise];
  
      default:
        return state;
    }
  };
  export default goal;