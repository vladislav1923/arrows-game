import { testSaga } from 'redux-saga-test-plan';
import rootSaga, { arrowsGeneration } from './index';
import GeneratedArrow from '../../interfaces/generated-arrow';
import ArrowsEnum from '../../enums/arrows';
import { addGeneratedArrow } from '../actions';
import ARROW_GENERATION_DELAY from '../../constants/arrow-generation-delay';
import EventKeysEnum from '../../enums/keys';
import { getRandomArrow } from '../../utils';

const randomArrow: GeneratedArrow = {
	value: ArrowsEnum.Right,
	eventKey: EventKeysEnum.Right,
	isCorrect: false,
};

jest.mock('../../utils', () => ({
	getRandomArrow: jest.fn(),
}));

describe('Sagas', () => {
	it('should start generating arrows in root saga', () => {
		testSaga(rootSaga)
			.next()
			.call(arrowsGeneration)
			.next()
			.isDone();
	});

	it('should generate arrows with interval', () => {
		(getRandomArrow as any).mockReturnValue(randomArrow);

		testSaga(arrowsGeneration)
			.next()
			.put(addGeneratedArrow(randomArrow))
			.next()
			.delay(ARROW_GENERATION_DELAY)
			.next()
			.call(arrowsGeneration)
			.next()
			.isDone();
	});
});
