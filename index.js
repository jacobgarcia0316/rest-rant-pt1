require('dotenv').config()
const express = require('express')
const app = express()

app.use('/places', require ('./controllers/places'))

app.get('/', (req, res) => {
    res.send('Home page!')
})

app.get ('*', (req, res) => {
    res.status(404).send ('<h1>error page</h1>')
})

app.listen(process.env.PORT)
