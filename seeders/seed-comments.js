const db = require('../models')

async function seed () {
    let place = await db.Place.findOne ({ name: 'H-Thai-ML'})

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

function show (data) {
    let comments = (
      <h3 className="inactive">
        No comments yet!
      </h3>
    )
    if (data.place.comments.length) {
      comments = data.place.comments.map(c => {
        return (
          <div className="border">
            <h2 className="rant">{c.rant ? 'Rant! ðŸ˜¡' : 'Rave! ðŸ˜»'}</h2>
            <h4>{c.content}</h4>
            <h3>
              <stong>- {c.author}</stong>
            </h3>
            <h4>Rating: {c.stars}</h4>
          </div>
        )
      })
    }
    return (
        <Def>
          <main>
            <div className="row">
              ...
            </div>
            <hr />
            <h2>Comments</h2>
            {comments}
          </main>
        </Def>
    )
}

module.exports = show
