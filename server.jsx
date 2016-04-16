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

// TODO - env vars
const PORT = 8080;

const HTML = fs.readFileSync(path.join(__dirname, './app/index.html'), { encoding: 'utf-8' });

// TODO - externalise
const STATUS = {
	OK: 200,
	ERROR: 500,
	REDIRECT: 302
};

const app = express();

app.use('/static', express.static(path.join(__dirname, './static')));
app.use('/build', express.static(path.join(__dirname, './build')));

app.use((req, res) => {
	const memoryHistory = createMemoryHistory(req.url);
	const store = configureStore(memoryHistory);
	const history = syncHistoryWithStore(memoryHistory, store);

	const routes = getRoutes(store);

	match({ history, routes, location: req.url }, (error, redirectLocation, renderProps) => {
		if (error) {
			res.status(STATUS.ERROR).send(error.message);
		}
		else if (redirectLocation) {
			res.redirect(STATUS.REDIRECT, redirectLocation.pathname + redirectLocation.search);
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

			return res.status(STATUS.OK).send(payload);
		}
	});
});

app.listen(PORT, () => {
	console.log('ITS HAPPENING.'); // eslint-disable-line
});
