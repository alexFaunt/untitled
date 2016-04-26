import {
	GraphQLInt,
	GraphQLList
} from 'graphql';

import GameModel from '../models/GameModel.js';
import GameType from '../types/GameType.js';

const fetchProps = {
	withRelated: [
		'creator', 'players', 'players.member', 'players'
	]
};

export const game = {
	type: GameType,
	args: {
		id: {
			name: 'id',
			type: GraphQLInt,
			description: 'id of the game to fetch.'
		}
	},
	resolve: (_, { id }) => {
		return (new GameModel())
			.where('id', parseInt(id, 10))
			.fetch(fetchProps)
			.then((response) => response.toJSON())
			.catch((err) => err);
	}
};

export const games = {
	type: new GraphQLList(GameType),
	description: 'get all games',
	resolve: () => {
		return (new GameModel())
			.fetchAll(fetchProps)
			.then((response) => response.toJSON())
			.catch((err) => err);
	}
};
