const expressLayouts = require('express-ejs-layouts')
const express = require('express')
const app = express()

// IMPORT MODUL ROUTER
const routers = require('./routers')

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(expressLayouts)
app.use( (req, res, next) => {
  req.app.set('layout','layouts/non')
  next()
})

app.listen(1500, () => {
  console.log('Server jalan sedang berjalan di localhost:1500')
})

// DEFAULT ROUTER
app.get('/', (req,res) => res.render('index'))
app.use('/dashboard/', routers.dashboard)
app.use('/cars/', routers.cars)
app.use('/auth/', routers.auth)
