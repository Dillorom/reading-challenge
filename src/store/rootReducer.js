import { combineReducers } from 'redux';
import user from '../reducers/user';
// const initialState = {
// //need to set initial state
// }

// const rootReducer = (state = initialState, action) => {
//     return state
// }

export default combineReducers({
    user
});
