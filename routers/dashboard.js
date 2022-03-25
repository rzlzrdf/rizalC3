const express = require('express')
const router = express.Router()
const dashboardController = require('../controllers/dashboard')

router.use( (req,res,next) => {
  req.app.set('layout', 'layouts/template')  
  next()
})

router.get('/', dashboardController.dashboard )
router.get('/dashboard', dashboardController.dashboard )


// ----------------------------------------- //



module.exports = router






