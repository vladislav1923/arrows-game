import { useEffect } from 'react';
import { getArrowByEventKey, isArrowEventKey } from '../../utils';
import EventKeysEnum from '../../enums/keys';
import PressedArrow from '../../interfaces/pressed-arrow';
import { addPressedArrow } from '../../store/actions';
import { useAppDispatch } from '../../store';

const useKeydownListener = (): void => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		window.addEventListener('keydown', (event: KeyboardEvent) => {
			const { key } = event;
			if (!isArrowEventKey(key)) {
				return;
			}

			const arrow = getArrowByEventKey(key as EventKeysEnum);
			if (!arrow) {
				return;
			}

			const pressedArrow: PressedArrow = {
				eventKey: key as EventKeysEnum,
				value: arrow,
			};

			dispatch(addPressedArrow(pressedArrow));
		});
	}, []);
};

export default useKeydownListener;
