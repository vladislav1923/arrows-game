import { combineReducers, Reducer } from 'redux';
import arrowsReducer from './arrows';

const reducer: Reducer = combineReducers({
	arrows: arrowsReducer,
});

export default reducer;
