import {
	GraphQLString,
	GraphQLList
} from 'graphql';

import PlayerType from '../types/PlayerType.js';
import PlayerModel from '../models/PlayerModel.js';

export const player = {
	type: PlayerType,
	description: 'get player by id',
	args: {
		id: {
			type: GraphQLString,
			name: 'id'
		}
	},
	resolve: (_, { id }) => {
		return PlayerModel
			.where('id', id)
			.fetch()
			.then((res) => res.toJSON())
			.catch((err) => err);
	}
};

export const players = {
	type: new GraphQLList(PlayerType),
	description: 'get all players',
	resolve: () => {
		return PlayerModel
			.fetchAll({ withRelated: ['member', 'game'] })
			.then((res) => res.toJSON())
			.catch((err) => err);
	}
};

export const myPlayers = {
	type: new GraphQLList(PlayerType),
	description: 'get all players',
	resolve: () => {
		return (new PlayerModel())
			.fetchAll({ withRelated: ['game'] })
			.then((res) => res.toJSON())
			.catch((err) => err);
	}
};
