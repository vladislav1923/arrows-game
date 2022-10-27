import React, { ReactElement, useEffect } from 'react';
import './index.css';
import { RootState, useAppSelector } from '../../store';
import Header from '../Header';
import GeneratedArrows from '../GeneratedArrows';
import PressedArrows from '../PressedArrows';
import LivesCounter from '../LivesCounter';
import useKeydownListener from '../../hooks/use-keydown-listener';
import GameOverTextsEnum from '../../enums/game-over-texts';
import LIVES_COUNT from '../../constants/lives-count';
import SUCCESS_SCORE from '../../constants/success-score';
import { showGaveOverModal } from '../../utils';

const App = (): ReactElement => {
	const { generatedArrows, pressedArrows, correctCount, errorsCount } = useAppSelector(
		(state: RootState) => state.arrows
	);

	useEffect(() => {
		if (correctCount >= SUCCESS_SCORE) {
			showGaveOverModal(GameOverTextsEnum.Success);
		}
	}, [correctCount]);

	useEffect(() => {
		if (errorsCount >= LIVES_COUNT) {
			showGaveOverModal(GameOverTextsEnum.Failure);
		}
	}, [errorsCount]);

	useKeydownListener();

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
