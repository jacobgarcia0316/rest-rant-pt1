//this page is the skeleton of all pages that will be made

const React = require('react')

function Def (html) {
    return (
        <html>
            <head>
                <title>Title</title>
                <link rel="stylesheet" href="css/style.css"></link>
            </head>
            <body>
                {html.children}
            </body>
        </html>
    )
  }
  
module.exports = Def