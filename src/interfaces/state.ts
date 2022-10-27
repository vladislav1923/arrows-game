import GeneratedArrow from './generated-arrow';
import PressedArrow from './pressed-arrow';

interface State {
	generatedArrows: GeneratedArrow[];
	pressedArrows: PressedArrow[];
	correctCount: number;
	errorsCount: number;
}

export default State;
