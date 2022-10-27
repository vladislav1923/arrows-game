import EventKeysEnum from '../enums/keys';
import ArrowsEnum from '../enums/arrows';

const EVENT_KEYS_ARROWS_MAP: Map<EventKeysEnum, ArrowsEnum> = new Map()
	.set(EventKeysEnum.Up, ArrowsEnum.Up)
	.set(EventKeysEnum.Down, ArrowsEnum.Down)
	.set(EventKeysEnum.Left, ArrowsEnum.Left)
	.set(EventKeysEnum.Right, ArrowsEnum.Right);

export default EVENT_KEYS_ARROWS_MAP;
