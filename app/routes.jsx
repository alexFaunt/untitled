import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './containers/App/App.jsx';
import Home from './containers/Home/Home.jsx';
import Login from './containers/Login/Login.jsx';

export const LOGIN = 'login';
export const HOME = '/';

export default function getRoutes () {
	return (
		<Route path={ HOME } component={ App }>
			<IndexRoute component={ Home }/>
			<Route path={ LOGIN } component={ Login }/>
		</Route>
	);
}
