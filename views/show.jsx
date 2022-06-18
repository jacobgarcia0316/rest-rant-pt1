const React = require('react')
const Def = require('./default')

function show (data) {
    let rating = (
        <h3 className="inactive">
          Not yet rated
        </h3>
      )
      if (data.place.comments.length) {
        let sumRatings = data.place.comments.reduce((tot, c) => {
          return tot + c.stars
        }, 0)
        let averageRating = Math.round(sumRatings / data.place.comments.length)
        let stars = ''
        for (let i = 0; i < averageRating; i++) {
            stars += 'star emoji'
        }
        rating = (
          <h3>
            {stars} stars
          </h3>
        )
    return (
        <Def>
          <main>
              <h1>Add a New Place</h1>
                {message}
              <div className="row">
                  <div className="col-sm-6">
                      <img src= {data.place.pic} alt= {data.place.name}/>
                      <h3>
                          Located in {data.place.city}, {data.place.state}
                      </h3>
              </div>
              <div className="col-sm-6"></div>
            <h2>Description</h2>
                <p>asdfasdfasdfasdf</p>
                <h3>
                    {data.place.showEstablished()}
                </h3>
                <h4>
                    Serving {data.place.cuisines}
                </h4>
            <h2>Rating</h2>
                <p>not rated yet</p>
            <h2>Comments</h2>
                <p>no comment</p>
            <a href={`/places/${data.id}/edit`} className="btn btn-warning">Edit</a>     
            <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
                <button type="submit" className="btn btn-danger">
                    Delete
                </button>
                </form>
                </div> 
          </main>
        </Def>
    )
}

module.exports = show