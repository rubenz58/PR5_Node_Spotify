'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Songs', {
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
      duration: {
        type: Sequelize.INTEGER
      },
      trackNumber: {
        type: Sequelize.INTEGER
      },
      filePath: {
        type: Sequelize.STRING(500),
        allowNull: false
      },
      albumId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'Albums',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
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
    await queryInterface.dropTable('Songs');
  }
};