'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Planets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      weather: {
        type: Sequelize.STRING
      },
      resource1: {
        type: Sequelize.STRING
      },
      resource2: {
        type: Sequelize.STRING
      },
      resource3: {
        type: Sequelize.STRING
      },
      galacticCoords: {
        type: Sequelize.STRING
      },
      glyphs: {
        type: Sequelize.STRING
      },
      comments: {
        type: Sequelize.STRING
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Planets');
  }
};