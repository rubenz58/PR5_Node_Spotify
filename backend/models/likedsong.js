'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class LikedSong extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      LikedSong.belongsTo(models.User, {
        foreignKey:'userId',
        as: 'user'
      });

      LikedSong.belongsTo(models.Song, {
        foreignKey: 'songId',
        as: 'song'
      });
    }
  }
  LikedSong.init({
    userId: DataTypes.INTEGER,
    songId: DataTypes.INTEGER,
    likedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'LikedSong',
  });
  return LikedSong;
};