import { combineReducers } from 'redux';
import setGoal from './goal';
import addBook from './books';

export default combineReducers({
    setGoal: setGoal,
    addBook: addBook
});
