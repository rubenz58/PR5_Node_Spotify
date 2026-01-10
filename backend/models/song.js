'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Song extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Song.belongsTo(models.Album, {foreignKey: 'albumId'});

      Song.belongsToMany(models.Playlist, {
        through: models.PlaylistSong,
        foreignKey: 'songId',
        otherKey: 'playlistId',
        as: 'playlists'
      });

      Song.belongsToMany(models.User, {
        through: models.QueueSong,
        foreignKey: 'songId',
        otherKey: 'userId',
        as: 'queuedByUsers'
      });

      Song.belongsToMany(models.User, {
        through: models.LikedSong,
        foreignKey: 'songId',
        otherKey: 'userId',
        as: 'likedByUsers'
      });

      Song.belongsToMany(models.User, {
        through: models.RecentlyPlayedSong,
        foreignKey: 'songId',
        otherKey: 'userId',
        as: 'recentlyPlayedByUsers'
      });
    }
  }
  Song.init({
    title: DataTypes.STRING,
    artist: DataTypes.STRING,
    duration: DataTypes.INTEGER,
    trackNumber: DataTypes.INTEGER,
    filePath: DataTypes.STRING,
    albumId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Song',
    tableName: 'Songs'
  });
  return Song;
};