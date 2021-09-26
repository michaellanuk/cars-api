const { Sequelize } = require('sequelize');

module.exports = new Sequelize('cars', 'root', 'password', {
    host: 'localhost',
    dialect: 'mysql'
})