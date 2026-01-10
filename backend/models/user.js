'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Playlist, { foreignKey: 'userId' });

      User.belongsToMany(models.Song, {
        through: models.QueueSong,
        foreignKey: 'userId',
        otherKey: 'songId',
        as: 'queueSongs'
      });

      User.belongsToMany(models.Song, {
        through: models.LikedSong,
        foreignKey: 'userId',
        otherKey: 'songId',
        as: 'likedSongs'
      });

      User.belongsToMany(models.Song, {
        through: models.RecentlyPlayedSong,
        foreignKey: 'userId',
        otherKey: 'songId',
        as: 'recentlyPlayedSongs'
      });

    }
  }
  User.init({
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: true,
        len: [2, 50]
      }
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: true,
        isEmail: true
      }
    },
    passwordHash: {
      type: DataTypes.STRING(255),
      allowNull: false,
      validate: {
        notEmpty: true
      }
    }
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'Users'
  });
  
  return User;
};