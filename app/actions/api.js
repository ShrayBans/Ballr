import axios from 'axios'

export const FETCH_PLAYERS = 'FETCH_PLAYERS';

export function fetchPlayers(name){
	var nameArr = name.split(' ');

	var request = axios.get(`http://localhost:3000/player/${nameArr[0]}/${nameArr[1]}`);

	//redux-thunk returns a function rather than a regular object
	return (dispatch) => {
		request.then(({data}) => {
			dispatch({
				type: FETCH_PLAYERS,
				payload: data
			})
		});
	};
}
