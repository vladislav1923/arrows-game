import React, { ReactElement } from 'react';
import GeneratedArrow from '../../interfaces/generated-arrow';
import ArrowsContainer from '../ArrowsContainer/indes';
import Arrow from '../Arrow';

type Props = {
	generatedArrows: GeneratedArrow[];
};

const GeneratedArrows = ({ generatedArrows }: Props): ReactElement => {
	return (
		<ArrowsContainer title="Next">
			<>
				{generatedArrows.map((arrow: GeneratedArrow, index: number) => (
					<Arrow key={index} value={arrow.value} isCorrect={arrow.isCorrect} />
				))}
			</>
		</ArrowsContainer>
	);
};

export default GeneratedArrows;
