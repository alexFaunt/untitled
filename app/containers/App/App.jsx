import React from 'react';
import styles from './App.css';

import Header from '../../components/Header/Header.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import Overlay from '../../components/Overlay/Overlay.jsx';

export default function App ({ children }) {
	return (
		<div className={ styles.app }>
			<Header />
			<main className={ styles.main }>
				{ children }
			</main>
			<Footer />
			<Overlay />
		</div>
	);
}
