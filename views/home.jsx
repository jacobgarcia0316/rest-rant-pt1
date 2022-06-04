const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
            <main>
                <h1>hello home page</h1>
                <a href="/places">
                    <button className="btnPrimary">Places Page</button>
                </a>
            </main>
        </Def>
    )
} 

module.exports = home