const express = require('express')
const cars = require('../controllers/cars')
const router = express.Router()
const carsController = require('../controllers/cars')

router.use( (req,res,next) => {
  req.app.set('layout', 'layouts/template')  
  next()
})
router.get('/', carsController.cars)


// ----------------------------------------- //



module.exports = router






