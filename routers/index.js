
const express = require('express')
const router = express.Router()
const app = express()




// ----------------------------------------- //
const dashboard = require('./dashboard')
const cars = require('./cars')

module.exports = { 
  dashboard: dashboard, 
  cars : cars,

}


