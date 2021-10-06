const Car = require('../db/models/car')

const allowedFields = ["id", "makeModel"];

const getAllCars = (req, res) => {
    Car.findAll()
        .then(cars => {
            let carArr = cars.map(car => {
                const makeModel = `${car.make}-${car.model}`;
                let carCopy = {
                    ...car.toJSON(),
                    makeModel,
                }
                for (const [key, value] of Object.entries(carCopy)) {
                    if (!allowedFields.includes(key)) {
                        delete carCopy[key];
                    }
                }

                return carCopy;
            })
            res.send(carArr)
        })
        .catch(err => console.log(err))
}


const getCarById = (req, res) => {
    Car.findByPk(req.params.id)
        .then(car => {
            if (car !== null) {
                res.send(car)
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
        .then(car => res.status(201).send(car))
        .catch(err => console.log(err))
}

const updateCar = async (req, res) => {
    let { make, model } = req.body

    let carToBeUpdated = await Car.findByPk(req.params.id)
    
    carToBeUpdated.update({ 
        make, model
    })

    res.sendStatus(200)
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
    updateCar,
    deleteCarById
}