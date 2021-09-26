const Car = require('../db/models/car')

const getAllCars = (req, res) => {
    Car.findAll()
        .then(cars => {
            res.send(cars)
        })
        .catch(err => console.log(err))
}


const getCarById = (req, res) => {
    Car.findByPk(req.params.id)
        .then(cars => {
            if (cars !== null) {
                res.send(cars)
            } else {
                res.send('No entries found')
            }
        })
        .catch(err => console.log(err))
}


const getCarByMakeModel = (req, res) => {
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
            if (cars.length !== 0) {
                res.send(cars)
            } else {
                res.send('No entries found')
            }
        })
        .catch(err => console.log(err))
}

const addNewCar = (req, res) => {
    let { make, model } = req.body
    let errors = []

    if (!make) {
        errors.push('make')
    }
    if (!model) {
        errors.push('model')
    }

    if (errors.length > 0) {
        res.status(500).send(`Missing data for ${errors}`)
        return
    }

    Car.create({ make, model })
        .then(car => res.redirect('/cars'))
        .catch(err => console.log(err))
}

const deleteCarById = (req, res) => {
    Car.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(car => res.redirect('/cars'))
        .catch(err => console.log(err))
}

module.exports = {
    getAllCars,
    getCarById,
    getCarByMakeModel,
    addNewCar,
    deleteCarById
}