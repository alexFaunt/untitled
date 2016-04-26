const queries = {};

function append (model) {
	for (const endpoint in model) {
		if (!model.hasOwnProperty(endpoint)) {
			continue;
		}

		// if it's already there then we have a problem.
		if (queries.hasOwnProperty(endpoint)) {
			throw `ERROR! two queries points with same name. Not allowed... ${ endpoint }`;
		}

		queries[endpoint] = model[endpoint];
	}
}

import * as MemberQueries from './MemberQueries.js'; append(MemberQueries);
import * as GameQueries from './GameQueries.js'; append(GameQueries);
import * as PlayerQueries from './PlayerQueries.js'; append(PlayerQueries);

export default queries;
