//modules and global
require('dotenv').config()
const express = require('express')
const app = express()

//express settings
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public')) //lets express know were accessing the public folder

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
