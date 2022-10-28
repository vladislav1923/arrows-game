import React from 'react';
import ArrowsEnum from '../../enums/arrows';
import EventKeysEnum from '../../enums/keys';
import { render } from '@testing-library/react';
import PressedArrows from './index';
import PressedArrow from '../../interfaces/pressed-arrow';

describe('PressedArrows component', () => {
	it('should render arrows', () => {
		const pressedArrows: PressedArrow[] = [
			{
				value: ArrowsEnum.Up,
				eventKey: EventKeysEnum.Up,
			},
			{
				value: ArrowsEnum.Down,
				eventKey: EventKeysEnum.Down,
			},
			{
				value: ArrowsEnum.Down,
				eventKey: EventKeysEnum.Down,
			},
		];

		const { container } = render(<PressedArrows pressedArrows={pressedArrows} />);

		const arrowElements = container.getElementsByClassName('arrow');

		expect(arrowElements.length).toBe(pressedArrows.length);
		expect(arrowElements[0].textContent).toBe(ArrowsEnum.Up);
		expect(arrowElements[2].textContent).toBe(ArrowsEnum.Down);
	});
});
