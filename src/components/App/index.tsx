import React, { ReactElement, useEffect } from 'react';
import './index.css';
import { RootState, useAppDispatch, useAppSelector } from '../../store';
import { addPressedArrow } from '../../store/actions';
import { getArrowByEventKey, isArrowEventKey } from '../../utils';
import EventKeysEnum from '../../enums/keys';
import PressedArrow from '../../interfaces/pressed-arrow';
import Header from '../Header';
import GeneratedArrows from '../GeneratedArrows';
import PressedArrows from '../PressedArrows';
import LivesCounter from '../LivesCounter';

const App = (): ReactElement => {
	const { generatedArrows, pressedArrows, errorsCount } = useAppSelector(
		(state: RootState) => state.arrows
	);
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

	return (
		<div className="app">
			<Header />
			<section className="app__section">
				<GeneratedArrows generatedArrows={generatedArrows} />
				<PressedArrows pressedArrows={pressedArrows} />
				<LivesCounter errorsCount={errorsCount} />
			</section>
		</div>
	);
};

export default App;
