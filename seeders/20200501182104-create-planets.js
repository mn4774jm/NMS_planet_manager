'use strict';

const planets = [

]

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    var planetDates = states.map(function(s) {
      s.visited = false;
      s.createdAt = new Date(),
          s.updatedAt = new Date()
      return s
    })

    return queryInterface.bulkInsert('States', planetDates, {})
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
    */
    return queryInterface.bulkDelete('States', null, {});

  }
};
