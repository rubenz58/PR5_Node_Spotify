'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Album extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Album.belongsTo(models.Artist, {
        foreignKey: 'artistId'
      });

      Album.hasMany(models.Songs, {
        foreignKey: 'albumId'
      });
    }
  }
  Album.init({
    title: DataTypes.STRING,
    artist: DataTypes.STRING,
    artistId: DataTypes.INTEGER,
    releaseDate: DataTypes.DATE,
    genre: DataTypes.STRING,
    coverImageUrl: DataTypes.STRING,
    trackCount: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Album',
    tableName: 'Albums'
  });
  return Album;
};