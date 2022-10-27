import ArrowsEnum from '../../enums/arrows';
import { AnyAction } from 'redux';

export const ADD_GENERATED_ARROW = 'ADD_GENERATED_ARROW';
export const ADD_PRESSED_ARROW = 'ADD_PRESSED_ARROW';

export function addGeneratedArrow(arrow: ArrowsEnum): AnyAction {
	return { type: ADD_GENERATED_ARROW, arrow };
}

export function addPressedArrow(arrow: ArrowsEnum): AnyAction {
	return { type: ADD_PRESSED_ARROW, arrow };
}
