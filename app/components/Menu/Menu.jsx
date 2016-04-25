import React, { Component } from 'react';
import { connect } from 'react-redux';

import { content } from './Menu.css';

import { Link } from 'react-router';
import { HOME, LOGIN } from '../../routes.jsx';

import { hideOverlay } from '../../actions/overlayActions.js';

@connect(() => ({}), { hideOverlay })
export default class Menu extends Component {
	render () {
		return (
			<div className={ content } >
				<Link to={ HOME } onClick={ this.props.hideOverlay }>Home</Link>
				<Link to={ LOGIN } onClick={ this.props.hideOverlay }>Log in</Link>
			</div>
		);
	}
}
