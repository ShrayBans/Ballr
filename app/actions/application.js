import axios from 'axios'

export const FETCH_PLAYERS = 'FETCH_PLAYERS';

export function fetchPlayers(name){
	var nameArr = name.split(' ');

	var promise = axios.get(`http://localhost:3000/player/${nameArr[0]}/${nameArr[1]}`);

	return {
		type: FETCH_PLAYERS,
		payload: promise
	};
}
