import {combineReducers} from 'redux';

import players from './playerReducers';
import button from './buttonReducer';

export default combineReducers({
	players,
	button
});