const React = require('react')
const Def = require('./default')

function error404 () {
  return (
    <Def>
        <main>
    <h1>Error</h1>
    <div>
      <img src="/images/errorpic.jpg" alt="bird error" width = '500' height = '500'/>
      <div>
        Photo by <a href="AUTHOR_LINK">Mikhail Vasilyev</a> on <a href="UNSPLASH_LINK">Unsplash</a>
      </div>
    </div>
    <a href="/places">
        <button className="btn-primary">Places Page</button>
    </a>
</main>

    </Def>
  )
}

module.exports = error404
