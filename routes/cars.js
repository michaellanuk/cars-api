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

router.get('/id/:id', (req, res) => {
    Car.findByPk(req.params.id)
        .then(cars => {
            res.send(cars)
        })
        .catch(err => console.log(err))
    }
)

router.get('/search', (req, res) => {
    var query = {}
    if (req.query.make) {
        query.make = req.query.make
    }
    if (req.query.model) {
        query.model = req.query.model
    }

    Car.findAll({
            where: query
        })
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
        errors.push("make")
    }
    if (!model) {
        errors.push("model")
    }

    if (errors.length > 0) {
        res.status(500).send(`Missing data for ${errors}`)
        return
    }

    Car.create({ make, model })
        .then(car => res.redirect('/cars'))
        .catch(err => console.log(err))
})

router.delete('/delete/:id', (req, res) => {
    Car.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(car => res.redirect('/cars'))
        .catch(err => console.log(err))
})

module.exports = router