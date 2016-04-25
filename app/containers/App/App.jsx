import React, { Component } from 'react';
import { app, main } from './App.css';

import Header from '../../components/Header/Header.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import Overlay from '../../components/Overlay/Overlay.jsx';

import { connect } from 'react-redux';

@connect(({ overlay: { content } }) => ({
	overlayContent: content
}))
export default class App extends Component {
	render () {
		const { children, overlayContent } = this.props;

		return (
			<div className={ app }>
				<Header />
				<main className={ main }>
					{ children }
				</main>
				<Footer />
				<Overlay>{ overlayContent[0] }</Overlay>
			</div>
		);
	}
}
