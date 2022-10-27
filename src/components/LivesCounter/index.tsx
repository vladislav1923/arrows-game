import React, { ReactElement, useEffect, useState } from 'react';
import './index.css';
import LIVES_COUNT from '../../constants/lives-count';
import LIVE_EMOJI from '../../constants/live-emoji';

type Props = {
	errorsCount: number;
};

const LivesCounter = ({ errorsCount }: Props): ReactElement => {
	const [lives, setLives] = useState<string[]>([]);

	useEffect(() => {
		const restLives = LIVES_COUNT - errorsCount;
		const livesEmoji = Array(restLives).fill(LIVE_EMOJI);
		setLives(livesEmoji);
	}, [errorsCount]);

	return <div className="live-counter__container">{lives}</div>;
};

export default LivesCounter;
