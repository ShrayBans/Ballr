import FETCH_HOUSE from '../actions/index'
export default function(state = {}, action){
	switch(action.type){
		case FETCH_HOUSE:
			return action.payload.data;
			break;
		default:
			return state;
			break;
	}
}