'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Playlist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Playlist.belongsTo(models.User, { foreignKey: 'userId' });

      Playlist.belongsToMany(models.Song, {
        through: models.PlaylistSong,
        foreignKey: 'playlistId',
        otherKey: 'songId',
        as: 'songs'
      });
    }
  }
  Playlist.init({
    name: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    songCount: DataTypes.INTEGER,
    isEditable: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Playlist',
  });
  return Playlist;
};