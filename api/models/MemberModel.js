import database from '../database.js';

import PlayerModel from './PlayerModel.js';
import GameModel from './GameModel.js';

export default database.Model.extend({
	tableName: 'members',
	createdGames () {
		return this.hasMany(GameModel, 'creator');
	},
	players () {
		return this.hasMany(PlayerModel);
	},
	playingGames () {
		return this.belongsToMany(GameModel).through(PlayerModel);
	}
});
