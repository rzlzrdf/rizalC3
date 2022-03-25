const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth')

router.use( (req,res,next) => {
  req.app.set('layout', 'layouts/non')  
  next()
})
router.get('/', authController.auth)
router.post('/r')


// ----------------------------------------- //



module.exports = router






