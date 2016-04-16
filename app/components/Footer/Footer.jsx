import React from 'react';
import styles from './Footer.css';
import { lexums } from '../../../content';

import { Link } from 'react-router';

import Content from '../Content/Content.jsx';

export default function Footer () {
	return (
		<footer className={ styles.footer }>
			<Content>
				<Link to="/terms" className={ styles.link } >{ lexums.termsTitle }</Link>
				<Link to="/contact" className={ styles.link } >{ lexums.contactTitle }</Link>
				<div className={ styles.logo }key="logo">LOGO</div>
			</Content>
		</footer>
	);
}
