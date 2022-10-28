import { useAppDispatch } from '../../store';
import { useEffect } from 'react';
import { showGaveOverModal } from '../../utils';
import GameOverTextsEnum from '../../enums/game-over-texts';
import WIN_SCORE from '../../constants/win-score';
import { clearArrows } from '../../store/actions';

const useWinGame = (correctCount: number): void => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		if (correctCount >= WIN_SCORE) {
			// setTimeout нужен для того, чтобы перед показом модального окна произошел ререндеринг
			setTimeout(() => {
				showGaveOverModal(GameOverTextsEnum.Win);
				dispatch(clearArrows());
			}, 100);
		}
	}, [correctCount]);
};

export default useWinGame;
