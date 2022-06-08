const db = require ('../models/places.js')
//* issues with .create not being able to be defined or read*/
db.Place.create([{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: '/images/h-thai-ml-tables.jpg',
    founded: 1989,
}, {
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: '/images/coffee-cat.jpg',
    founded: 2020,
}])

.then(() => {
    console.log('it worked')
    process.exit()
})
.catch(err => {
    console.log('it didnt work', err)
    process.exit()
})

