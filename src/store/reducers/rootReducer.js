import { combineReducers } from 'redux';
import setGoal from './goal';
import manageBooks from './books';
import manageUsers from './login';

export default combineReducers({
    setGoal: setGoal,
    manageBooks: manageBooks,
    manageUsers: manageUsers
});
