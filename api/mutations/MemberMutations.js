import {
	GraphQLString,
	GraphQLNonNull
} from 'graphql';

import MemberType from '../types/MemberType.js';
import MemberModel from '../models/MemberModel.js';

const DEFAULT_SCORE = 0;

export const createMember = {
	type: MemberType,
	args: {
		name: {
			name: 'name',
			type: new GraphQLNonNull(GraphQLString)
		},
		avatar: {
			name: 'avatar',
			type: GraphQLString
		}
	},
	resolve: (_, { name, avatar }) => {
		return (new MemberModel())
			.save({ name, avatar })
			.then(({ id }) => ({ id, name, avatar, score: DEFAULT_SCORE }))
			.catch((err) => err);
	}
};
