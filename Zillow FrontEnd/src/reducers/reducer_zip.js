import GET_ZIP from '../actions/index'
export default function(state = 0, action){
	console.log(action.data)
	switch(action.type){
		case GET_ZIP:
			return //VALUE OF HOUSES AT SPECIFIC ZIP CODE
			break;
		default:
			return state;
			break;
	}
}