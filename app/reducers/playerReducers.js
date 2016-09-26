import {FETCH_PLAYERS, FETCH_PLAYERS_ERR, DELETE_PLAYER} from '../actions/api';

const initial_state = [];

//{firstName: 'smith', lastName: 'jones', fg_pct: 1, ft_pct: 2, fg3_pct: 3, ast: 5, stl:5, blk:5, tov:5 , pts: 5}

export default function reducer(state= initial_state, action) {
	switch(action.type) {
		case FETCH_PLAYERS:
			console.log('SOMETHING');
			return [...state, action.payload];
		case FETCH_PLAYERS_ERR:
			console.log('ERR', action.payload);
			return state;
		case DELETE_PLAYER:
			return [
		    ...state.slice(0, action.payload),
		    ...state.slice(action.payload + 1)
				]
		default:
			return state;
	}
}