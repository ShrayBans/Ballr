// import redux-thank
export const FETCH_HOUSE = 'FETCH_HOUSE';
export const GET_ZIP = 'GET_ZIP';


export function fetchHouse(){

	var promise = axios.get('http://localhost:3000/json');

	return {
		type: FETCH_HOUSE,
		payload: promise
	};
}

export function getZip(zip){
	// console.log('STORE: ', store.getState())
	return {
		type: GET_ZIP,
		data: store.getState(),
		payload: zip
	};
}