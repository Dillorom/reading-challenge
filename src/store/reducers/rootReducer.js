import { combineReducers } from 'redux';
import setGoal from './goal';
import manageBooks from './books';
import manageUsers from './login';
import viewBook from './viewBook';

export default combineReducers({
    setGoal,
    manageBooks,
    manageUsers,
    viewBook
});
