import {INCREMENT} from '../actions/application';
const initial_state = 0;

export default function reducer(state= initial_state, action) {
	switch(action.type) {
		case INCREMENT:
			return state+action.payload;
		default:
			return state;
	}
}