import EventKeysEnum from '../enums/keys';
import ArrowsEnum from '../enums/arrows';
import EVENT_KEYS_ARROWS_MAP from '../constants/event-keys-arrows-map';

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

export { getArrowByEventKey, isArrowEventKey };
