import { createStore, combineReducers, compose, applyMiddleware } from 'redux';

import { routerReducer, routerMiddleware } from 'react-router-redux';

export function configureStore (history, initialState) {
	const reducer = combineReducers({
		routing: routerReducer
	});

	return createStore(
		reducer,
		initialState,
		compose(
			applyMiddleware(
				routerMiddleware(history)
			)
		)
	);
}
