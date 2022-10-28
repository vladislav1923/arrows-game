import React from 'react';
import { render } from '@testing-library/react';
import ArrowsContainer from './index';

describe('ArrowsContainer component', () => {
	it('should render an arrow without highlight', async () => {
		const title = 'Next';
		const childText = 'some-text';
		const children = <div>{childText}</div>;
		const { findByText } = render(
			<ArrowsContainer title={title}>{children}</ArrowsContainer>
		);

		const titleElement = await findByText(`${title}:`);
		const childrenElement = await findByText(childText);

		expect(titleElement).toBeDefined();
		expect(childrenElement).toBeDefined();
	});
});
