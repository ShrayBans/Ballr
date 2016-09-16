import { combineReducers } from 'redux';
import HouseReducer from './reducer_house'
import ZipReducer from './reducer_zip'


const rootReducer = combineReducers({
	zip: ZipReducer,
 	houseData: HouseReducer
});

export default rootReducer;
