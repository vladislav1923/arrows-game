import React from 'react';
import GeneratedArrow from '../../interfaces/generated-arrow';
import ArrowsEnum from '../../enums/arrows';
import EventKeysEnum from '../../enums/keys';
import { render } from '@testing-library/react';
import GeneratedArrows from './index';

describe('GeneratedArrows component', () => {
	it('should render arrows', () => {
		const generatedArrows: GeneratedArrow[] = [
			{
				value: ArrowsEnum.Up,
				eventKey: EventKeysEnum.Up,
				isCorrect: false,
			},
			{
				value: ArrowsEnum.Down,
				eventKey: EventKeysEnum.Down,
				isCorrect: true,
			},
			{
				value: ArrowsEnum.Down,
				eventKey: EventKeysEnum.Down,
				isCorrect: false,
			},
		];

		const { container } = render(
			<GeneratedArrows generatedArrows={generatedArrows} />
		);

		const arrowElements = container.getElementsByClassName('arrow');

		expect(arrowElements.length).toBe(generatedArrows.length);
		expect(arrowElements[0].textContent).toBe(ArrowsEnum.Up);
		expect(arrowElements[2].textContent).toBe(ArrowsEnum.Down);
	});
});
