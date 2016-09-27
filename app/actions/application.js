import Ballr from '../BallrAlgo.js';
export const INCREMENT = 'INCREMENT';
export const DELETE_PLAYER = 'DELETE_PLAYER';
export const COMPARE_PLAYERS = 'COMPARE_PLAYERS';
export const RESET_PLAYERS = 'RESET_PLAYERS';

//test function for redux incrementing
export function incrementVal(name){
	return {
		type: INCREMENT,
		payload: 1
	};
}

//Deletes a player from the array being displayed (using its index in the array)
export function deletePlayer(index){
	console.log(index)
	return {
		type: DELETE_PLAYER,
		payload: index
	}
}

//compares the players on the board and chooses which of them is the best based on a proprietary Ballr algorithm
export function comparePlayers(playerArr){
	var ballrData = Ballr(playerArr);
	var index = ballrData[0];
	var ballrScore = ballrData[1];
	var name = playerArr[index].firstName+" "+ playerArr[index].lastName;
	return {
		type: COMPARE_PLAYERS,
		payload: {
			index,
			name,
			ballrScore 
		}
	}
}

export function resetPlayer