const React = require('react')
const Def = require('./default')

function edit_form (data) {
    return (
        <Def>
          <main>
            <h1>Edit Place</h1>
            <form method="POST" action={`/places/${data.id}?_method=PUT`}>
                <div className="form-group">
                    <label htmlFor="name">Destination Name</label>
                    <input 
                    className="form-control" 
                    id="name" 
                    name="name"
                    value={data.place.name} 
                    required/>
                </div>
                <div className="form-group">
                    <label htmlFor="name">Picture</label>
                    <input 
                    className="form-control" 
                    id="pic" 
                    name="pic"
                    value={data.place.name} 
                    required/>
                </div>
                <div className="form-group">
                    <label htmlFor="name">Destination City</label>
                    <input 
                    className="form-control" 
                    id="city" 
                    name="city"
                    value={data.place.name} 
                    required/>
                </div>
                <div className="form-group">
                    <label htmlFor="name">Destination State</label>
                    <input 
                    className="form-control" 
                    id="state" 
                    name="state"
                    value={data.place.name} 
                    required/>
                </div>
                <div className="form-group">
                    <label htmlFor="name">Destination Cuisine</label>
                    <input 
                    className="form-control" 
                    id="cuisine" 
                    name="cuisine"
                    value={data.place.name} 
                    required/>
                </div>
                </form>
          </main>
        </Def>
    )
}

module.exports = edit_form
