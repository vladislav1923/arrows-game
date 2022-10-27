import React, { ReactElement } from 'react';
import cn from 'classnames';

type Props = {
	value: string;
	isCorrect?: boolean;
};

const Arrow = ({ value, isCorrect = false }: Props): ReactElement => {
	return <span className={cn('arrow', { ['arrow_correct']: isCorrect })}>{value}</span>;
};

export default Arrow;
