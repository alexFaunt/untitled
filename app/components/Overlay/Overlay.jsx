import styles from './Overlay.css';

import React, { Component } from 'react';
import { connect } from 'react-redux';

// import Menu from '../Menu/Menu';

@connect((state) => ({
	overlay: state.Overlay
}))
export default class Overlay extends Component {
	render () {
		const { overlay } = this.props;
		const overlays = [];

		// TODO - just allow JSX to be pushed into store + render that.
		// if (overlay.menu) {
		// 	overlays.push(<Menu />);
		// }

		return (
			<div className={ styles.overlay }>
				{ overlays }
			</div>
		);
	}
}
