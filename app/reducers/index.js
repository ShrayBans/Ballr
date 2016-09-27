import {combineReducers} from 'redux';

import winner from './winnerReducer';
import players from './playerReducers';
import button from './buttonReducer';

export default combineReducers({
	players,
	button,
	winner
});