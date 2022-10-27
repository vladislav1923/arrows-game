import { AnyAction } from 'redux';
import INITIAL_STATE from '../../../constants/initial-state';
import State from '../../../interfaces/state';
import { ADD_GENERATED_ARROW, ADD_PRESSED_ARROW, CLEAR_ARROWS } from '../../actions';
import initialState from '../../../constants/initial-state';

const arrowsReducer = (state: State = INITIAL_STATE, action: AnyAction) => {
	switch (action.type) {
		case ADD_GENERATED_ARROW: {
			return {
				...state,
				generatedArrows: [action.arrow, ...state.generatedArrows],
			};
		}
		case ADD_PRESSED_ARROW: {
			if (state.generatedArrows.length === 0) {
				return {
					...state,
					pressedArrows: [action.arrow, ...state.pressedArrows],
					errorsCount: ++state.errorsCount,
				};
			}

			const lastGeneratedArrow = state.generatedArrows[0];
			const isCorrect = lastGeneratedArrow.value === action.arrow.value;

			if (!isCorrect) {
				return {
					...state,
					pressedArrows: [action.arrow, ...state.pressedArrows],
					errorsCount: ++state.errorsCount,
				};
			}

			lastGeneratedArrow.isCorrect = true;

			return {
				...state,
				generatedArrows: [lastGeneratedArrow, ...state.generatedArrows.slice(1)],
				pressedArrows: [action.arrow, ...state.pressedArrows],
				correctCount: ++state.correctCount,
			};
		}
		case CLEAR_ARROWS: {
			return initialState;
		}
		default:
			return state;
	}
};

export default arrowsReducer;
