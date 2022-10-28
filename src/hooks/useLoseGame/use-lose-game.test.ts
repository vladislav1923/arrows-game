import { renderHook } from '@testing-library/react-hooks';
import useLoseGame from './index';
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

describe('Hook useLoseGame', () => {
	it('should handle losing the game', done => {
		renderHook(() => useLoseGame(3));

		setTimeout(() => {
			expect(mockShowGaveOverModal).toHaveBeenCalledWith(GameOverTextsEnum.Lose);
			expect(mockDispatch).toHaveBeenCalledWith(clearArrows());
			done();
		}, 100);
	});

	it('should handle not losing score', done => {
		renderHook(() => useLoseGame(1));

		setTimeout(() => {
			expect(mockShowGaveOverModal).not.toHaveBeenCalled();
			expect(mockDispatch).not.toHaveBeenCalled();
			done();
		}, 100);
	});
});
