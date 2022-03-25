
const express = require('express')
const router = express.Router()
const app = express()




// ----------------------------------------- //
const dashboard = require('./dashboard')
const cars = require('./cars')
const auth = require('./auth')


module.exports = { 
  dashboard: dashboard, 
  cars: cars,
  auth: auth
}


