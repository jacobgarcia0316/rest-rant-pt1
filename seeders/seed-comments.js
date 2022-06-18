const db = require('../models')

async function seed () {
    let place = await db.Place.FindOne ({ name: 'H-Thai-ML'})

    let comment = await db.Comment.create ({ 
        author: 'Famished Fran',
        rant: false,
        stars: 5.0,
        content: 'this place is great!'
    })

    place.comment.push(comment.id)

    await place.save()

    process.exit()
}

seed ()

