import { createStore, combineReducers, compose, applyMiddleware } from 'redux';

import { routerReducer, routerMiddleware } from 'react-router-redux';
import * as reducers from './reducers';
import * as middleware from './middleware';

export function configureStore (history, initialState) {
	const reducer = combineReducers({
		...reducers,
		routing: routerReducer
	});

	return createStore(
		reducer,
		initialState,
		compose(
			applyMiddleware(
				...middleware,
				routerMiddleware(history)
			)
		)
	);
}
