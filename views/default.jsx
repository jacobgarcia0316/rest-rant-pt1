//this page is the skeleton of all pages that will be made

const React = require('react')

function Def (html) {
    return (
        <html>
            <head>
                <title>Title</title>
                <link rel="bootstrap style" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"></link>
                <link rel="stylesheet" href="css/style.css"></link>
            </head>
            <body>
                <nav>
                    <ul>
                        <li>
                            <a href="/">HOME</a>
                        </li>
                        <li>
                            <a href="/places">PLACES</a>
                        </li>
                        <li>
                            <a href="/places/new">ADD A PLACE</a>
                        </li>
                    </ul>
                </nav>
                {html.children}
            </body>
        </html>
    )
  }
  
module.exports = Def