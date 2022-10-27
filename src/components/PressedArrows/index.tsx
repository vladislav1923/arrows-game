import React, { ReactElement } from 'react';
import ArrowsContainer from '../ArrowsContainer/indes';
import Arrow from '../Arrow';
import PressedArrow from '../../interfaces/pressed-arrow';

type Props = {
	pressedArrows: PressedArrow[];
};

const PressedArrows = ({ pressedArrows }: Props): ReactElement => {
	return (
		<ArrowsContainer title="Input">
			<>
				{pressedArrows.map((arrow: PressedArrow, index: number) => (
					<Arrow key={index} value={arrow.value} />
				))}
			</>
		</ArrowsContainer>
	);
};

export default PressedArrows;
