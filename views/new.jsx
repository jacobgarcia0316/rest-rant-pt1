const React = require('react')
const Def = require('./default')

function new_form() {
    return (
        <Def>
            <main>
                <h1>Add a New Destination</h1>
                <form method="POST" action="/places">
                <div className="form-group">
                    <label htmlFor="name">Destination Name</label>
                    <input className="form-control" id="name" name="name" required/>
                </div>
                <div className="form-group">
                    <label htmlFor="pic">Place Image</label>
                    <input className="form-control" id="pic" name="pic"/>
                </div>
                <div className="form-group">
                    <label htmlFor="state">State</label>
                    <input className="form-control" id="state" name="state"/>
                </div>
                <div className="form-group">
                    <label htmlFor="City">City</label>
                    <input className="form-control" id="city" name="city"/>
                </div>
                <div className="form-group">
                    <label htmlFor="cuisine">Cuisine</label>
                    <input className="form-control" id="cuisine" name="cuisine" required/>
                </div>
                <div className="form-group">
                    <label for="founded">Founded Year</label>
                    <input 
                    type="number"
                    className="form-control" 
                    id="founded" 
                    name="founded"
                    value={new Date().getFullYear()} />
                </div>
                <a href="/places"></a>
                <input className="btn btn-primary" type ="submit" value="Add Place" ></input> 
                </form>
            </main>
        </Def>
    )
}

module.exports = new_form