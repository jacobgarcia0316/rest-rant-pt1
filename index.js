require('dotenv').config()
const express = require('express')
const app = express()

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.use('/places', require ('./controllers/places'))

app.get('/', (req, res) => {
    res.render('home') //when changed to render, pass through the name of the file instead of a text to be displayed
})

app.get ('*', (req, res) => {
    res.render('error404') //when changed to render, pass through the name of the file instead of a text to be displayed
})


app.listen(process.env.PORT)
