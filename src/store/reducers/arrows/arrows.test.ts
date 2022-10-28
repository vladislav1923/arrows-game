import GeneratedArrow from '../../../interfaces/generated-arrow';
import ArrowsEnum from '../../../enums/arrows';
import EventKeysEnum from '../../../enums/keys';
import arrowsReducer from './index';
import INITIAL_STATE from '../../../constants/initial-state';
import { addGeneratedArrow, addPressedArrow, clearArrows } from '../../actions';
import State from '../../../interfaces/state';
import PressedArrow from '../../../interfaces/pressed-arrow';

describe('Arrows reducer', () => {
	it('should add generated arrows', () => {
		let state: State = INITIAL_STATE;
		const arrow1: GeneratedArrow = {
			value: ArrowsEnum.Right,
			eventKey: EventKeysEnum.Right,
			isCorrect: false,
		};
		const arrow2: GeneratedArrow = {
			value: ArrowsEnum.Left,
			eventKey: EventKeysEnum.Left,
			isCorrect: false,
		};

		const action1 = addGeneratedArrow(arrow1);
		state = arrowsReducer(INITIAL_STATE, action1);

		expect(state.generatedArrows).toEqual([arrow1]);

		const action2 = addGeneratedArrow(arrow2);
		state = arrowsReducer(state, action2);

		expect(state.generatedArrows).toEqual([arrow2, arrow1]);
	});

	it('should handle pressing arrow before first generated arrow', () => {
		let state: State = INITIAL_STATE;
		const arrow: PressedArrow = {
			value: ArrowsEnum.Right,
			eventKey: EventKeysEnum.Right,
		};

		const action = addPressedArrow(arrow);
		state = arrowsReducer(state, action);

		expect(state.pressedArrows).toEqual([arrow]);
		expect(state.errorsCount).toBe(1);
		expect(state.correctCount).toBe(0);
	});

	it('should handle pressing correct arrow', () => {
		let state: State = {
			generatedArrows: [
				{
					value: ArrowsEnum.Right,
					eventKey: EventKeysEnum.Right,
					isCorrect: false,
				},
				{
					value: ArrowsEnum.Up,
					eventKey: EventKeysEnum.Up,
					isCorrect: false,
				},
			],
			pressedArrows: [],
			correctCount: 0,
			errorsCount: 0,
		};
		const arrow: PressedArrow = {
			value: ArrowsEnum.Right,
			eventKey: EventKeysEnum.Right,
		};

		const action = addPressedArrow(arrow);
		state = arrowsReducer(state, action);

		expect(state.pressedArrows).toEqual([arrow]);
		expect(state.generatedArrows[0].isCorrect).toBeTruthy();
		expect(state.generatedArrows[1].isCorrect).toBeFalsy();
		expect(state.errorsCount).toBe(0);
		expect(state.correctCount).toBe(1);
	});

	it('should handle pressing incorrect arrow', () => {
		let state: State = {
			generatedArrows: [
				{
					value: ArrowsEnum.Right,
					eventKey: EventKeysEnum.Right,
					isCorrect: false,
				},
				{
					value: ArrowsEnum.Up,
					eventKey: EventKeysEnum.Up,
					isCorrect: false,
				},
			],
			pressedArrows: [],
			correctCount: 0,
			errorsCount: 0,
		};
		const arrow: PressedArrow = {
			value: ArrowsEnum.Up,
			eventKey: EventKeysEnum.Up,
		};

		const action = addPressedArrow(arrow);
		state = arrowsReducer(state, action);

		expect(state.pressedArrows).toEqual([arrow]);
		expect(state.generatedArrows[0].isCorrect).toBeFalsy();
		expect(state.generatedArrows[1].isCorrect).toBeFalsy();
		expect(state.errorsCount).toBe(1);
		expect(state.correctCount).toBe(0);
	});

	it('should clear state', () => {
		let state: State = {
			generatedArrows: [
				{
					value: ArrowsEnum.Right,
					eventKey: EventKeysEnum.Right,
					isCorrect: false,
				},
			],
			pressedArrows: [
				{
					value: ArrowsEnum.Right,
					eventKey: EventKeysEnum.Right,
				},
			],
			correctCount: 2,
			errorsCount: 3,
		};

		const action = clearArrows();
		state = arrowsReducer(state, action);

		expect(state).toEqual(INITIAL_STATE);
	});
});
