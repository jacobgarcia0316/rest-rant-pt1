const router = require('express').Router()

router.get('/new',(req, res) => {
  res.render('new')
})

router.get ('/', (req, res) => {
  let places = [{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: 'images/food1.jpg' 
  }, {
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: 'images/food2.jpg'
  }]
    res.render ('index', {places})
})

module.exports = router