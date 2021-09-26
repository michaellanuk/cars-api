const express = require('express')
const router = express.Router()
const controllers = require('../controllers/carController')

router.get('/', controllers.getAllCars)

router.get('/id/:id', controllers.getCarById)

router.get('/search', controllers.getCarByMakeModel)

router.post('/add', controllers.addNewCar)

router.delete('/delete/:id', controllers.deleteCarById)

module.exports = router