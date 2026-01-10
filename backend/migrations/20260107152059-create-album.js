'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Albums', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      artist: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      artistId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'Artists',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      releaseDate: {
        type: Sequelize.DATEONLY,
        allowNull: true
      },
      genre: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      coverImageUrl: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      trackCount: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        allowNull: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Albums');
  }
};