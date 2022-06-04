//this page is the skeleton of all pages that will be made

const React = require('react')

function Def (html) {
    return (
        <html>
            <head>
                <title>Title</title>
                <link rel="stylesheet" href="css/style.css"></link>
                <link rel="bootstrap style" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"></link>
            </head>
            <body>
                {html.children}
            </body>
        </html>
    )
  }
  
module.exports = Def