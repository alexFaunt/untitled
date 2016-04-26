import {
	GraphQLString,
	GraphQLList
} from 'graphql';

import MemberType from '../types/MemberType.js';
import MemberModel from '../models/MemberModel.js';

export const member = {
	type: MemberType,
	description: 'Return member by id',
	args: {
		id: {
			type: GraphQLString,
			name: 'id'
		}
	},
	resolve: (_, { id }) => {
		return MemberModel
			.where('id', id)
			.fetch({
				withRelated: [
					'players',
					'players.game',
					'players.game.creator',
					'players.game.players',
					'createdGames',
					'playingGames'
				]
			})
			.then((res) => res.toJSON())
			.catch((err) => err);
	}
};

export const members = {
	type: new GraphQLList(MemberType),
	description: 'get all members',
	resolve: () => {
		return MemberModel
			.fetchAll({
				withRelated: ['players', 'players.game', 'createdGames', 'playingGames']
			})
			.then((res) => res.toJSON())
			.catch((err) => err);
	}
};
