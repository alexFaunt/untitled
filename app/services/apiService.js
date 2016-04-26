import config from '../../server/config.js';
import axios from 'axios';
import { toCamel } from 'morph';

function getResponseString (obj) {
	const resp = [];

	for (const prop in obj) {
		if (!obj.hasOwnProperty(prop)) {
			continue;
		}

		if (typeof obj[prop] === 'object') {
			resp.push(`${ prop } ${ getResponseString(obj[prop]) }`);
			continue;
		}

		resp.push(prop);
	}

	return `{ ${ resp.join(', ') } }`;
}

export default function ({ query, mutation }) {
	const type = query ? 'query' : 'mutation';
	const { method, params, response } = query || mutation;
	const requestArray = [`${ toCamel(type) } { ${ toCamel(method) }`];

	if (params) {
		// For each of the params
		const paramArray = [];

		for (const prop in params) {
			if (!params.hasOwnProperty(prop)) {
				continue;
			}
			paramArray.push(`${ prop }: "${ params[prop] }"`);
		}

		requestArray.push(`( ${ paramArray.join(', ') } )`);
	}

	if (response) {
		requestArray.push(getResponseString(response));
	}

	requestArray.push(' }');

	// TODO - not localhost...
	return axios({
		url: `http://localhost:${ config.port }/api`,
		method: 'post',
		headers: { 'Content-Type': 'application/graphql' },
		data: requestArray.join('')
	});
}
