import { put, delay, call } from 'redux-saga/effects';
import GeneratedArrow from '../../interfaces/generated-arrow';
import { getRandomArrow } from '../../utils';
import { addGeneratedArrow } from '../actions';
import ARROW_GENERATION_DELAY from '../../constants/arrow-generation-delay';

export function* arrowsGeneration(): Generator {
	const arrow: GeneratedArrow = getRandomArrow();
	yield put(addGeneratedArrow(arrow));

	yield delay(ARROW_GENERATION_DELAY);
	yield call(arrowsGeneration);
}

export default function* rootSaga(): Generator {
	yield call(arrowsGeneration);
}
