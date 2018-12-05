import { combineReducers } from 'redux';
import setGoal from './goal';
import addBook from './books';
import login from './login';

export default combineReducers({
    setGoal: setGoal,
    addBook: addBook,
    login: login
});
