const Sequelize = require('sequelize')
const db = require('../config/database')

const Car = db.define('car', {
    make: {
        type: Sequelize.STRING
    },
    model: {
        type: Sequelize.STRING
    },
    createdAt: {
        type: Sequelize.DATE
    },
    updatedAt: {
        type: Sequelize.DATE
    }
})

module.exports = Car