import { combineReducers } from 'redux';
import setGoal from './goal';
import manageBooks from './books';
import manageUsers from './login';
import viewBook from './viewBook';
import likeCounter from './likeCounter';

export default combineReducers({
    setGoal,
    manageBooks,
    manageUsers,
    viewBook,
    likeCounter
});
