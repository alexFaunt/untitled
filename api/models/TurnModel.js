import database from '../database.js';
import GameModel from './GameModel.js';
import PlayerModel from './PlayerModel.js';

export default database.Model.extend({
	tableName: 'games_players',
	game () {
		return this.belongsTo(GameModel);
	},
	player () {
		return this.belongsTo(PlayerModel);
	}
});
