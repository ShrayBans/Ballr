import FETCH_PLAYERS from '../actions/application'

const initial_state = [];

//{firstName: 'smith', lastName: 'jones', fg_pct: 1, ft_pct: 2, fg3_pct: 3, ast: 5, stl:5, blk:5, tov:5 , pts: 5}

export default function reducer(state= initial_state, action) {
	switch(action.type) {
		case FETCH_PLAYERS:
			console.log('SOMETHING')
			return [...state, action.payload];
		// case DELETE_PLAYER:
		// 	return {...state, players: }
		default:
			return state;
	}
}