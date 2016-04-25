import createReducer from './create-reducer.js';
import { SHOW_OVERLAY, HIDE_OVERLAY } from '../actions/overlayActions.js';

const INITIAL_STATE = {
	content: []
};

export default createReducer(INITIAL_STATE, {
	[SHOW_OVERLAY]: (state, { content }) => ({
		content: state.content.concat([content])
	}),
	[HIDE_OVERLAY]: ({ content }) => {
		content.shift();
		return { content: [].concat(content) };
	}
});
