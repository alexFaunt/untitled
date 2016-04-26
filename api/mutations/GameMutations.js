import {
	GraphQLString,
	GraphQLID
} from 'graphql';

import GameModel from '../models/GameModel.js';
import GameType from '../types/GameType.js';

export const createGame = {
	type: GameType,
	args: {
		deck: {
			name: 'deck',
			type: GraphQLString
		},
		creator: {
			name: 'creator',
			type: GraphQLID
		}
	},
	resolve: (obj, { deck, creator }) => {
		return (new GameModel())
			.save({ deck, creator })
			.then(({ id }) => ({ id, deck, creator }))
			.catch((err) => err);
	}
};
