import ArrowsEnum from '../enums/arrows';
import EventKeysEnum from '../enums/keys';

interface BaseArrow {
	eventKey: EventKeysEnum;
	value: ArrowsEnum;
}

export default BaseArrow;
