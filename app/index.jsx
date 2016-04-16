// TODO - only load this when needed in prod.
import 'babel-polyfill';

import React from 'react';
import { render } from 'react-dom';

import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import { configureStore } from './store.jsx';
import getRoutes from './routes.jsx';

const store = configureStore(browserHistory, window.__INITIAL_STATE__);
const history = syncHistoryWithStore(browserHistory, store);

render(
	<Provider store={ store }>
		<Router history={ history } routes={ getRoutes(store) } />
	</Provider>,
	document.getElementById('content')
);
