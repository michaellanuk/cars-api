'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Cars', 
      [
        {
          make: 'Volskwagen',
          model: 'Golf GTI',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          make: 'BMW',
          model: '1-Series',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          make: 'Mercedes-Benz',
          model: 'A-Class',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          make: 'Fiat',
          model: '500',
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ] 
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Cars', null, {});
  }
};
