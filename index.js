//modules and global
require('dotenv').config()
const express = require('express')
const app = express()
const methodOverride = require('method-override')

//mongoose and mongodb
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true, 
  useUnifiedTopology: true
})

module.exports.Place = require ('./controllers/places')


//express settings
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public')) //lets express know were accessing the public folder
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))


//controllers & routes
app.use('/places', require ('./controllers/places'))

app.get('/', (req, res) => {
    res.render('home') //when changed to render, pass through the name of the file instead of a text to be displayed
})

app.get ('*', (req, res) => {
    res.render('error404') //when changed to render, pass through the name of the file instead of a text to be displayed
})

//listens for connections
app.listen(process.env.PORT)
