// import express
const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('template')
})

app.listen(1500, () => {console.log('port 1500 sudah jalan');})