const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main>
            <h1>{ data.place.name }</h1>
            <img id="show" src={data.place.pic} alt={data.place.name}/>
            <h2>Rating</h2>
            <p>Not Rated</p>
            <div id="comments">
                <h2>Comments</h2>
                    <p>No comments yet!</p>
            </div>
            <a href="" className="btn btn-warning"> 
  Edit
</a>  
<form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
  <button type="submit" className="btn btn-danger">
    Delete
  </button>
</form> 


          </main>
        </Def>
        
    )
}



module.exports = show