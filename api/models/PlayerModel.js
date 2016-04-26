import database from '../database.js';
import MemberModel from './MemberModel.js';
import GameModel from './GameModel.js';

export default database.Model.extend({
	tableName: 'players',
	member () {
		return this.belongsTo(MemberModel);
	},
	game () {
		return this.belongsTo(GameModel);
	}
});
