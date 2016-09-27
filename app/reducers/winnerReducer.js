import {COMPARE_PLAYERS, RESET_PLAYERS} from '../actions/application';

const initial_state = {
	name: "",
	ballrScore: ""
};

export default function reducer(state= initial_state, action) {
	switch(action.type) {
		case COMPARE_PLAYERS:
			return { name: action.payload.name, ballrScore: action.payload.ballrScore };
		case RESET_PLAYERS:
			return initial_state;
		default:
			return state;
	}
}