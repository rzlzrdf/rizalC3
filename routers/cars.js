const express = require('express')
const router = express.Router()
const carsController = require('../controllers/cars')

router.use( (req,res,next) => {
  req.app.set('layout', 'layouts/template')  
  next()
})
router.get('/', carsController.cars)
router.get('/addcar', carsController.addcar )
router.get('/editcar', carsController.editcar )


// ----------------------------------------- //



module.exports = router






