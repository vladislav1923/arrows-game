import React, { ReactElement } from 'react';
import 'index.css';

type Props = {
	title: string;
	children: ReactElement;
};

const ArrowsContainer = ({ title, children }: Props): ReactElement => {
	return (
		<div className="arrows-container">
			<div className="arrows-container__title">{title}:</div>
			<div className="arrows-container__values">{children}</div>
		</div>
	);
};

export default ArrowsContainer;
