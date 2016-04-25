import styles from './Header.css';
import { lexums } from '../../../content';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { showOverlay } from '../../actions/overlayActions';

import Menu from '../Menu/Menu.jsx';

@connect(() => ({}), { showOverlay })
export default class Header extends Component {

	openMenu = (e) => {
		e.preventDefault();
		this.props.showOverlay(<Menu />);
	}

	render () {
		return (
			<header className={ styles.header }>
				<Link to="/menu" className={ `${ styles.left } ${ styles.button }` } onClick={ this.openMenu }>MENU</Link>
				<h1 className={ styles.title }>{ lexums.title }</h1>
			</header>
		);
	}
}
