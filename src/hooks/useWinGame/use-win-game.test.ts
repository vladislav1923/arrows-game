import { renderHook } from '@testing-library/react-hooks';
import useWinGame from './index';
import WIN_SCORE from '../../constants/win-score';
import { showGaveOverModal } from '../../utils';
import { clearArrows } from '../../store/actions';
import GameOverTextsEnum from '../../enums/game-over-texts';

jest.mock('../../utils');

const mockShowGaveOverModal = showGaveOverModal as jest.MockedFunction<
	typeof showGaveOverModal
>;
const mockDispatch = jest.fn();

jest.mock('../../store', () => ({
	useAppDispatch: () => mockDispatch,
}));

describe('Hook useWinGame', () => {
	it('should handle winning the game', done => {
		renderHook(() => useWinGame(WIN_SCORE));

		setTimeout(() => {
			expect(mockShowGaveOverModal).toHaveBeenCalledWith(GameOverTextsEnum.Win);
			expect(mockDispatch).toHaveBeenCalledWith(clearArrows());
			done();
		}, 100);
	});

	it('should handle not winning score', done => {
		renderHook(() => useWinGame(WIN_SCORE - 1));

		setTimeout(() => {
			expect(mockShowGaveOverModal).not.toHaveBeenCalled();
			expect(mockDispatch).not.toHaveBeenCalled();
			done();
		}, 100);
	});
});
