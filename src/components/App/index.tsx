import React, { ReactElement } from 'react';
import './index.css';
import { RootState, useAppSelector } from '../../store';
import Header from '../Header';
import GeneratedArrows from '../GeneratedArrows';
import PressedArrows from '../PressedArrows';
import LivesCounter from '../LivesCounter';
import useKeydownListener from '../../hooks/useKeydownListener';
import useWinGame from '../../hooks/useWinGame';
import useLoseGame from '../../hooks/useLoseGame';

const App = (): ReactElement => {
	const { generatedArrows, pressedArrows, correctCount, errorsCount } = useAppSelector(
		(state: RootState) => state.arrows
	);

	useKeydownListener();
	useWinGame(correctCount);
	useLoseGame(errorsCount);

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
