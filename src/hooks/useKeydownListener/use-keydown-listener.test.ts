import { renderHook } from '@testing-library/react-hooks';
import useKeydownListener from './index';
import { addPressedArrow } from '../../store/actions';
import EventKeysEnum from '../../enums/keys';
import ArrowsEnum from '../../enums/arrows';

const mockDispatch = jest.fn();

jest.mock('../../store', () => ({
	useAppDispatch: () => mockDispatch,
}));

describe('Hook useKeydownListener', () => {
	it('should handle arrow pressing', () => {
		const eventKey = EventKeysEnum.Down;
		const expectedAction = addPressedArrow({
			value: ArrowsEnum.Down,
			eventKey,
		});

		renderHook(() => useKeydownListener());

		window.dispatchEvent(
			new KeyboardEvent('keydown', {
				key: eventKey,
			})
		);

		expect(mockDispatch).toHaveBeenCalledWith(expectedAction);
	});

	it('should ignore not arrow pressing', () => {
		renderHook(() => useKeydownListener());

		window.dispatchEvent(
			new KeyboardEvent('keydown', {
				key: 'A',
			})
		);

		expect(mockDispatch).not.toHaveBeenCalled();
	});
});
