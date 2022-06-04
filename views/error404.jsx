const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <p>THIS IS THE ERROR PAGE</p>
              <img src = "/images/error.jpg" height="500" width = "500" alt="error page picture"/>

          </main>
      </Def>
    )
  }
  
module.exports = error404
