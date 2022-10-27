import ArrowsEnum from '../enums/arrows';
import GeneratedArrow from './generated-arrow';

interface State {
	generatedArrows: GeneratedArrow[];
	pressedArrows: ArrowsEnum[];
	correctCount: number;
	errorsCount: number;
}

export default State;
