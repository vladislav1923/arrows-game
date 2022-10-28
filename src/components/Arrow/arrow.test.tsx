import React from 'react';
import { render } from '@testing-library/react';
import Arrow from './index';
import ArrowsEnum from '../../enums/arrows';

describe('Arrow component', () => {
	it('should render an arrow without highlight', async () => {
		const { findByText } = render(<Arrow value={ArrowsEnum.Up} />);

		const arrowElement = await findByText(ArrowsEnum.Up);

		expect(arrowElement).toBeDefined();
		expect(arrowElement.classList.contains('arrow_correct')).toBeFalsy();
	});

	it('should render a highlighted arrow', async () => {
		const { findByText } = render(<Arrow value={ArrowsEnum.Down} isCorrect={true} />);

		const arrowElement = await findByText(ArrowsEnum.Down);

		expect(arrowElement).toBeDefined();
		expect(arrowElement.classList.contains('arrow_correct')).toBeTruthy();
	});
});
