import React from 'react';
import { render } from '@testing-library/react';
import LivesCounter from './index';
import LIVE_EMOJI from '../../constants/live-emoji';

describe('LivesCounter component', () => {
	it('should count rest lives and render emoji (2 left)', async () => {
		const expectedEmojis = `${LIVE_EMOJI}${LIVE_EMOJI}`;
		const { findByText } = render(<LivesCounter errorsCount={1} />);

		const emojis = await findByText(expectedEmojis);

		expect(emojis).toBeDefined();
	});

	it('should count rest lives and render emoji (1 left)', async () => {
		const { findByText } = render(<LivesCounter errorsCount={2} />);

		const emojis = await findByText(LIVE_EMOJI);

		expect(emojis).toBeDefined();
	});

	it('should count rest lives and render emoji (0 left)', () => {
		const { container } = render(<LivesCounter errorsCount={3} />);

		const containerElement = container.querySelector('.live-counter__container');

		expect(containerElement?.textContent).toBe('');
	});
});
