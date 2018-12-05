const login = (state = {users: []}, action) => {

    switch (action.type) {
      case "LOGIN":
      console.log('Current state is:', state.users);
      
      console.log({ users: state.users.concat(action.payload) });
 
      return { users: state.users.concat(action.payload) };
      default:
      console.log("initial state is ", state)
        return state;
    }
  };
  export default login;