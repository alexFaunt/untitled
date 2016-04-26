const mutations = {};

function append (model) {
	for (const endpoint in model) {
		if (!model.hasOwnProperty(endpoint)) {
			continue;
		}

		// if it's already there then we have a problem.
		if (mutations.hasOwnProperty(endpoint)) {
			throw `ERROR! two mutations points with same name. Not allowed... ${ endpoint }`;
		}

		mutations[endpoint] = model[endpoint];
	}
}

import * as MemberMutations from './MemberMutations.js'; append(MemberMutations);
import * as GameMutations from './GameMutations.js'; append(GameMutations);
import * as PlayerMutations from './PlayerMutations.js'; append(PlayerMutations);

export default mutations;
