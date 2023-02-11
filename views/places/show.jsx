const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main>
          <div className="row">
            <div className="col-sm-6">
              <img className="border border-warning img-places" src={data.place.pic} alt={data.place.name} />
              <h3>
                Located in {data.place.city}, {data.place.state}
              </h3>
            </div>
            <div className="col-sm-6">
            <h1 className="text-warning">{data.place.name}</h1>                 
              <h2>
                Rating
              </h2>
              <h4>
                Not Rated
              </h4>
              <h2>
                Description
              </h2>
              <h3>
                {data.place.showEstablished()}
              </h3>
              <h4>
                Serving {data.place.cuisines}
              </h4>
            <div className="edit">
              <div className="p-2">
                <a href={`/places/${data.id}/edit`} className="btn btn-primary"> 
                  Edit
                </a>
              </div>           
              <div className="p-2">
                <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
                  <button type="submit" className="btn btn-danger">
                    Delete
                  </button>
                </form> 
              </div>  
            </div>
            </div>           
            <div className="p-2 sections">           
              <section className="comments" type="text">
                No comments yet!             
              </section>
            </div>
          </div>
        </main>
      </Def>
    )
  }
  
module.exports = show