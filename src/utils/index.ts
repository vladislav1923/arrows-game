import EventKeysEnum from '../enums/keys';
import ArrowsEnum from '../enums/arrows';
import EVENT_KEYS_ARROWS_MAP from '../constants/event-keys-arrows-map';
import GeneratedArrow from '../interfaces/generated-arrow';
import EVENT_KEYS_ARRAY from '../constants/event-keys-array';

const getArrowByEventKey = (eventKey: EventKeysEnum): ArrowsEnum | null => {
	return EVENT_KEYS_ARROWS_MAP.get(eventKey) || null;
};

const isArrowEventKey = (eventKey: string): boolean => {
	switch (eventKey) {
		case EventKeysEnum.Up:
		case EventKeysEnum.Down:
		case EventKeysEnum.Left:
		case EventKeysEnum.Right:
			return true;
		default:
			return false;
	}
};

const getRandomArrow = (): GeneratedArrow => {
	const eventKeyIndex = Math.floor(Math.random() * EVENT_KEYS_ARRAY.length);
	const eventKey = EVENT_KEYS_ARRAY[eventKeyIndex];
	const value = getArrowByEventKey(eventKey) as ArrowsEnum;

	return {
		value,
		eventKey,
		isCorrect: false,
	};
};

const showGaveOverModal = (text: string): void => {
	window.confirm(text) || document.location.reload();
};

export { getArrowByEventKey, isArrowEventKey, getRandomArrow, showGaveOverModal };
