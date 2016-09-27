import {FETCH_PLAYERS, FETCH_PLAYERS_ERR} from '../actions/api';
import {DELETE_PLAYER, COMPARE_PLAYERS, RESET_PLAYERS} from '../actions/application';


const initial_state = [];

//{firstName: 'smith', lastName: 'jones', fg_pct: 1, ft_pct: 2, fg3_pct: 3, ast: 5, stl:5, blk:5, tov:5 , pts: 5}

export default function reducer(state= initial_state, action) {
	switch(action.type) {
		case FETCH_PLAYERS:
			return [...state, {...action.payload, winner:false}];
		case FETCH_PLAYERS_ERR:
			console.log('ERR', action.payload);
			return state;
		case DELETE_PLAYER:
			return [
		    ...state.slice(0, action.payload),
		    ...state.slice(action.payload + 1)
				]
		case COMPARE_PLAYERS:
			return [
		    ...state.slice(0, action.payload),
		    {...state[action.payload.index], winner: true},
		    ...state.slice(action.payload + 1)
				];
		case RESET_PLAYERS:
			return initial_state;
		default:
			return state;
	}
}