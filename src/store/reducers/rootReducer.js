import { combineReducers } from 'redux';
import setGoal from './goal';

export default combineReducers({
    setGoal: setGoal
});
