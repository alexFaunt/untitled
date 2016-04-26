import {
	GraphQLString,
	GraphQLID
} from 'graphql';

import PlayerType from '../types/PlayerType.js';
import PlayerModel from '../models/PlayerModel.js';

export const createPlayer = {
	type: PlayerType,
	args: {
		member: {
			name: 'member',
			type: GraphQLID
		},
		hand: {
			name: 'hand',
			type: GraphQLString
		}
	},
	resolve: (obj, { member, hand }) => {
		return (new PlayerModel())
			.save({ member, hand })
			.then(({ id }) => ({ id, member, hand }))
			.catch((err) => err);
	}
};
