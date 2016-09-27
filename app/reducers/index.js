import {combineReducers} from 'redux';

import players from './winnerReducer';
import winner from './playerReducers';
import button from './buttonReducer';

export default combineReducers({
	players,
	button,
	winner
});