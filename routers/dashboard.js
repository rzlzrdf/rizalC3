const express = require('express')
const router = express.Router()
const dashboardController = require('../controllers/dashboard')
const authChecker = require('../lib/auth-checker')


router.use( (req,res,next) => {
  req.app.set('layout', 'layouts/template')  
  next()
})



router.get('/', dashboardController.dashboard )


// ----------------------------------------- //



module.exports = router






