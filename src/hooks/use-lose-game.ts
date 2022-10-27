import { useAppDispatch } from '../store';
import { useEffect } from 'react';
import { showGaveOverModal } from '../utils';
import GameOverTextsEnum from '../enums/game-over-texts';
import LIVES_COUNT from '../constants/lives-count';
import { clearArrows } from '../store/actions';

const useLoseGame = (errorsCount: number): void => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		if (errorsCount >= LIVES_COUNT) {
			// setTimeout нужен для того, чтобы перед показом модального окна произошел ререндеринг
			setTimeout(() => {
				showGaveOverModal(GameOverTextsEnum.Lose);
				dispatch(clearArrows());
			}, 100);
		}
	}, [errorsCount]);
};

export default useLoseGame;
