'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RecentlyPlayedSong extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      RecentlyPlayedSong.belongsTo(models.User, {
        foreignKey:'userId',
        as: 'user'
      });

      RecentlyPlayedSong.belongsTo(models.Song, {
        foreignKey: 'songId',
        as: 'song'
      });
    }
  }
  RecentlyPlayedSong.init({
    userId: DataTypes.INTEGER,
    songId: DataTypes.INTEGER,
    playedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'RecentlyPlayedSong',
  });
  return RecentlyPlayedSong;
};