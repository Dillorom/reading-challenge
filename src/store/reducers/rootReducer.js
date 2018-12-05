import { combineReducers } from 'redux';
import setGoal from './goal';
import manageBooks from './books';
import login from './login';

export default combineReducers({
    setGoal: setGoal,
    manageBooks: manageBooks,
    login: login
});
