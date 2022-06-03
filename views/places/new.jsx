const React = require('react')
const Def = require('../default')

function new_form () {
    return (
        <Def>
            <main>
                <h1> add a new place </h1>
                <form method="POST" action="/places">
                    <div>
                        <label htmlFor="name">Place Name</label>
                        <input id="name" name="name" required />
                    </div>
                    <div>
                        <label htmlFor="pic">Place Picture</label>
                        <input id="pic" name="pic" />
                    </div>
                    <div>
                        <label htmlFor="city">City</label>
                        <input id="city" name="city" />
                    </div>
                    <div>
                        <label htmlFor="state">State</label>
                        <input id="state" name="state" />
                    </div>
                    <div>
                        <label htmlFor="cuisines">Cuisines</label>
                        <input id="cuisines" name="cuisines" required />
                    </div>
                    <input type="submit" value="Add Place" />
                    <div>
                    <a href={`/places/${data.id}/edit`} className="btn btn-warning"> 
                        Edit
                        </a>     
                        <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
                        <button type="submit" className="btn btn-danger">
                            Delete
                        </button>
                        </form>     
                    </div>
                    </form>
            </main>
        </Def>
    )
}

module.exports = new_form