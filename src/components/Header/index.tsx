import React, { ReactElement } from 'react';
import logo from './logo.svg';
import './index.css';

const Header = (): ReactElement => {
	return (
		<header className="header">
			<img src={logo} className="header__logo" alt="logo" />
		</header>
	);
};

export default Header;
