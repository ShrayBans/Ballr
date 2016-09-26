import axios from 'axios'

export const FETCH_PLAYERS = 'FETCH_PLAYERS';

export function fetchPlayers(name){
	var nameArr = name.split(' ');
	console.log(nameArr);
	var request = axios.get(`http://localhost:3000/player/${nameArr[0]}/${nameArr[1]}`);
	request.then(function(data) {
		console.log(data)
	});
	//redux-thunk returns a function rather than a regular object
	return (dispatch) => {
		console.log('inside thunk')
		request.then(({data}) => {
			console.log('DATA', data)
			dispatch({
				type: FETCH_PLAYERS,
				payload: data
			})
		})
		.catch((err) => {
			console.error('sucks', err)
		});
	};
}
