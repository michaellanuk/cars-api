const express = require('express')
const router = express.Router()
const db = require('../config/database')
const Car = require('../db/models/car')

router.get('/', (req, res) => {
    Car.findAll()
        .then(cars => {
            res.send(cars)
        })
        .catch(err => console.log(err))
    }
)

router.post('/add', (req, res) => {
    let { make, model } = req.body
    let errors = []

    if (!make) {
        errors.push({text: "Please enter a make"})
    }
    if (!model) {
        errors.push({text: "Please enter a model"})
    }

    if (errors.length > 0) {
        res.send(errors)
    }

    Car.create({
        make,
        model,
        createdAt: new Date(),
        updatedAt: new Date()
    })
        .then(car => res.redirect('/cars'))
        .catch(err => console.log(err))
})

module.exports = router