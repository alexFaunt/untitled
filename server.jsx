import express from 'express';

import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { createMemoryHistory, match, RouterContext } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import { configureStore } from './app/store.jsx';
import getRoutes from './app/routes.jsx';

import fs from 'fs';
import path from 'path';

import config from './server/config.js';
import { OK, ERROR, REDIRECT } from './shared/constants/StatusCodes.js';

import bodyParser from 'body-parser';

import apiHandler from './server/handlers/apiHandler.js';

const HTML = fs.readFileSync(path.join(__dirname, './app/index.html'), { encoding: 'utf-8' });

const app = express();

app.use('/static', express.static(path.join(__dirname, './static')));
app.use('/build', express.static(path.join(__dirname, './build')));

app.post('/api', bodyParser.text({ type: 'application/graphql' }), apiHandler);

app.use((req, res) => {
	const memoryHistory = createMemoryHistory(req.url);
	const store = configureStore(memoryHistory);
	const history = syncHistoryWithStore(memoryHistory, store);

	const routes = getRoutes(store);

	match({ history, routes, location: req.url }, (error, redirectLocation, renderProps) => {
		if (error) {
			res.status(ERROR).send(error.message);
		}
		else if (redirectLocation) {
			res.redirect(REDIRECT, redirectLocation.pathname + redirectLocation.search);
		}
		else if (renderProps) {
			const content = renderToString(
				<Provider store={ store }>
					<RouterContext { ...renderProps }/>
				</Provider>
			);

			const payload = HTML
				.replace(/__content__/, content)
				.replace(/__state__/, JSON.stringify(store.getState()));

			return res.status(OK).send(payload);
		}
	});
});

app.listen(config.port, () => {
	console.log('ITS HAPPENING.'); // eslint-disable-line
});
