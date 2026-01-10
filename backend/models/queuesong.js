'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class QueueSong extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      QueueSong.belongsTo(models.User, {
        foreignKey:'userId',
        as: 'user'
      });

      QueueSong.belongsTo(models.Song, {
        foreignKey: 'songId',
        as: 'song'
      });
    }
  }
  QueueSong.init({
    userId: DataTypes.INTEGER,
    songId: DataTypes.INTEGER,
    position: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'QueueSong',
  });
  return QueueSong;
};