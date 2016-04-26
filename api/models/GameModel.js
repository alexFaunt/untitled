import database from '../database.js';
import PlayerModel from './PlayerModel.js';
import MemberModel from './MemberModel.js';

export default database.Model.extend({
	tableName: 'games',
	players () {
		return this.hasMany(PlayerModel);
	},
	creator () {
		return this.belongsTo(MemberModel, 'creator');
	}
});
