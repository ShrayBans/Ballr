export const FETCH_PLAYERS = 'FETCH_PLAYERS';
export const INCREMENT = 'INCREMENT';
export const DELETE_PLAYER = 'DELETE_PLAYER';

export function incrementVal(name){

	return {
		type: INCREMENT,
		payload: 1
	};
}

export function deletePlayer(){

}