import { AnyAction } from 'redux';
import PressedArrow from '../../interfaces/pressed-arrow';
import GeneratedArrow from '../../interfaces/generated-arrow';

export const ADD_GENERATED_ARROW = 'ADD_GENERATED_ARROW';
export const ADD_PRESSED_ARROW = 'ADD_PRESSED_ARROW';
export const CLEAR_ARROWS = 'CLEAR_ARROWS';

export function addGeneratedArrow(arrow: GeneratedArrow): AnyAction {
	return { type: ADD_GENERATED_ARROW, arrow };
}

export function addPressedArrow(arrow: PressedArrow): AnyAction {
	return { type: ADD_PRESSED_ARROW, arrow };
}

export function clearArrows(): AnyAction {
	return { type: CLEAR_ARROWS };
}
