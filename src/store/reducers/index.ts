import { AnyAction, combineReducers, Reducer } from 'redux';
import INITIAL_STATE from '../../constants/initial-state';
import State from '../../interfaces/state';
import { ADD_GENERATED_ARROW, ADD_PRESSED_ARROW } from '../actions';
import GeneratedArrow from '../../interfaces/generated-arrow';
import PressedArrow from '../../interfaces/pressed-arrow';

const state = (state: State = INITIAL_STATE, action: AnyAction) => {
	switch (action.type) {
		case ADD_GENERATED_ARROW: {
			const arrow: GeneratedArrow = {
				value: action.arrow,
				isCorrect: false,
			};

			return {
				...state,
				generatedArrows: [arrow, ...state.generatedArrows],
			};
		}
		case ADD_PRESSED_ARROW: {
			const { value } = state.generatedArrows[0];
			const isCorrect = value === action.arrow;
			const currentGeneratedArrow: GeneratedArrow = {
				value,
				isCorrect,
			};
			const pressedArrow: PressedArrow = {
				value: action.arrow,
			};

			return {
				generatedArrows: [
					currentGeneratedArrow,
					...state.generatedArrows.slice(1),
				],
				pressedArrows: [pressedArrow, ...state.pressedArrows],
				correctCount: isCorrect ? ++state.correctCount : state.correctCount,
				errorsCount: isCorrect ? state.errorsCount : ++state.errorsCount,
			};
		}
		default:
			return state;
	}
};

const reducer: Reducer = combineReducers({ state });

export default reducer;
