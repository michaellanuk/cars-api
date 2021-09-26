const Sequelize = require('sequelize');
const db = require('../config/database');

const Car = db.define('car', {
  make: {
    type: Sequelize.STRING
  },
  model: {
    type: Sequelize.STRING
  }
});

module.exports = Car;