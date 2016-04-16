import styles from './Header.css';
import { lexums } from '../../../content';

import React, { Component } from 'react';
import { connect } from 'react-redux';

// import { openMenu } from '../../actions/menuActions';

// @connect(() => ({}), openMenu)
export default class Header extends Component {
  render () {
	  // <div className={ styles.left } key="menu" onClick={ this.props.openMenu }>MENU BUTTON</div>
	return (
		<header className={ styles.header }>
			<h1 key="title" className={ styles.title }>{ lexums.title }</h1>
		</header>
	);
  }
}
