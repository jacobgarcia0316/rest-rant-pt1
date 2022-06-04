const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
            <main>
                <h1>hello home page</h1>
                <div>
                    <img src = "/images/market.jpg" height="500" width = "500" alt="home page picture"/>
                </div>
                <a href="/places">
                    <button className="btnPrimary">Places Page</button>
                </a>
            </main>
        </Def>
    )
} 

module.exports = home