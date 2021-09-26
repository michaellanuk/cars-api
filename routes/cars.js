const express = require('express')
const router = express.Router()
const db = require('../config/database')
const Car = require('../db/models/car')

router.get('/', (req, res) => 
    Car.findAll()
        .then(cars => {
            console.log(cars)
            res.sendStatus(200)
        })
        .catch(err => console.log(err))
)

module.exports = router