import EventKeysEnum from '../enums/keys';
import ArrowsEnum from '../enums/arrows';
import { getArrowByEventKey, isArrowEventKey } from './index';

describe('Utils', () => {
	it('should return arrow by event key', () => {
		const testMap: Map<EventKeysEnum | string, ArrowsEnum | null> = new Map()
			.set(EventKeysEnum.Up, ArrowsEnum.Up)
			.set(EventKeysEnum.Down, ArrowsEnum.Down)
			.set('diagonal', null);

		for (const [eventKey, expectedResult] of testMap) {
			const result = getArrowByEventKey(eventKey as EventKeysEnum);
			expect(result).toBe(expectedResult);
		}
	});

	it('should check is it an arrow key event', () => {
		const testMap: Map<string, boolean> = new Map()
			.set(EventKeysEnum.Up, true)
			.set(EventKeysEnum.Down, true)
			.set('D', false);

		for (const [eventKey, expectedResult] of testMap) {
			const result = isArrowEventKey(eventKey);
			expect(result).toBe(expectedResult);
		}
	});
});
